import { useTitle } from 'react-use';
import { useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { object } from 'yup';
import { ProductType } from '../../types/product.type';
import { useAuth } from '../../hooks/use-auth';
import { useData } from '../../hooks/use-data';
import { addDoc, deleteDoc, updateDoc } from '../../firebase/firestore';
import { formatName } from '../../utils/formatFields';
import { getErrorMessage } from '../../utils/getErrorMessage';
import {
  booleanSchema,
  nameSchema,
  priceSchema,
  requiredSchema,
} from '../../schemas';
import { ToastMessage } from '../../components/toast/Toast';
import { Form, Formik } from 'formik';
import {
  AddIcon,
  CheckIcon,
  CloseIcon,
  CopyIcon,
  DeleteIcon,
  UpdateIconRounded,
  ErrorIcon,
  LoadingIcon,
  SuccessIcon,
} from '../../components/Icons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog/Dialog';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../components/ui/alert-dialog/AlertDialog';
import { Checkbox } from '../../components/ui/checkbox/Checkbox';
import DataTable from '../../components/data-table/DataTable';
import Title from '../../components/title/Title';
import Button from '../../components/ui/button/Button';
import FormField from '../../components/form-field/FormField';
import CheckboxField from '../../components/checkbox-field/CheckboxField';
import './products.scss';

export function Products() {
  useTitle('Products | Dashboard');
  const { products } = useData();

  const columns = useMemo<ColumnDef<ProductType>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllRowsSelected()
                ? true
                : table.getIsSomeRowsSelected()
                ? 'indeterminate'
                : false
            }
            onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        cell: ({ row }) => {
          const value = row.getValue<string>('name');

          return (
            <div className="data-table-cell name-cell" title={value}>
              {value}
            </div>
          );
        },
      },
      {
        accessorKey: 'color',
        header: 'Color',
        cell: ({ row }) => {
          const value = row.getValue<string>('color');

          return (
            <div className="data-table-cell color-cell" title={value}>
              {value}
            </div>
          );
        },
      },
      {
        accessorKey: 'price',
        header: 'Price',
        cell: ({ row }) => {
          const value = row.getValue<number>('price');
          const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(value);

          return (
            <div className="data-table-cell" title={formatted}>
              {formatted}
            </div>
          );
        },
      },
      {
        accessorKey: 'inStock',
        header: 'In stock',
        cell: ({ row }) => {
          const value = row.getValue<boolean>('inStock');

          return (
            <div className="in-stock-cell" title={value ? 'Yes' : 'No'}>
              {value ? <CheckIcon /> : <CloseIcon />}
            </div>
          );
        },
      },
      {
        accessorKey: 'producer',
        header: 'Producer',
        cell: ({ row }) => {
          const value = row.getValue<string>('producer');

          return (
            <div className="data-table-cell producer-cell" title={value}>
              {value}
            </div>
          );
        },
      },
      {
        accessorKey: 'addedAt',
        header: 'Added at',
        cell: ({ row }) => {
          const value = row.getValue<Date>('addedAt');
          const formatted = format(value, 'PPP');

          return (
            <div className="data-table-cell" title={formatted}>
              {formatted}
            </div>
          );
        },
      },
      {
        id: 'actions',
        cell: ({ row }) => {
          const product = row.original;

          return (
            <div className="actions-cell">
              <CopyComponent productId={product.id} />
              <UpdateComponent product={product} />
              <DeleteComponent productId={product.id} />
            </div>
          );
        },
        enableSorting: false,
        enableHiding: false,
      },
    ],
    []
  );

  return (
    <div className="products">
      <Title title="Products" />
      <DataTable
        columns={columns}
        data={products}
        slug="products"
        AddComponent={AddComponent}
      />
    </div>
  );
}

export default Products;

function CopyComponent({ productId }: { productId: string }) {
  function handleCopy() {
    toast.dismiss();
    toast.clearWaitingQueue();
    navigator.clipboard.writeText(productId);
    toast.success(
      <ToastMessage
        title="Amazing! Success"
        description="Copied to your clipboard."
      />,
      {
        icon: SuccessIcon,
      }
    );
  }

  return (
    <Button
      variant="ghost"
      className="copy-product-button"
      onClick={handleCopy}
      aria-label="Copy product Id"
    >
      <CopyIcon />
    </Button>
  );
}

function AddComponent() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const initialValues = {
    name: '',
    color: '',
    price: '',
    producer: '',
    inStock: false,
  };
  const validationSchema = object().shape({
    name: requiredSchema,
    color: requiredSchema,
    price: priceSchema,
    producer: nameSchema,
    inStock: booleanSchema,
  });

  async function handleSubmit({
    name,
    color,
    producer,
    ...otherValues
  }: typeof initialValues) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      const newProduct = {
        name: formatName(name),
        color: formatName(color),
        producer: formatName(producer),
        addedAt: new Date(),
        updatedAt: new Date(),
        ...otherValues,
      };
      await addDoc(user!.uid!, 'products', newProduct);
      setOpen(false);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Product has been added."
        />,
        {
          icon: SuccessIcon,
        }
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Oops! Something went wrong"
          description={errorMessage}
        />,
        {
          icon: ErrorIcon,
        }
      );
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="add-product-alert-dialog-trigger">
          <AddIcon className="add-icon" />
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="add-product-form-dialog-content">
        <DialogHeader>
          <DialogTitle>Add product</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Add product in your data products.
        </DialogDescription>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="form-add-product">
              <fieldset disabled={isSubmitting} className="form-fieldset">
                <FormField label="Name" id="name" name="name" />
                <FormField label="Color" id="color" name="color" />
                <FormField
                  type="number"
                  label="Price"
                  id="price"
                  name="price"
                />
                <FormField label="Producer" id="producer" name="producer" />
                <CheckboxField
                  label="Is this product in stock?"
                  id="inStock"
                  name="inStock"
                />
              </fieldset>
              <div className="form-actions">
                <Button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingIcon className="loading-icon" />
                  ) : (
                    'Add product'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

function UpdateComponent({ product }: { product: ProductType }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const initialValues = {
    name: product.name,
    color: product.color,
    price: product.price,
    producer: product.producer,
    inStock: product.inStock,
  };
  const validationSchema = object().shape({
    name: requiredSchema,
    color: requiredSchema,
    price: priceSchema,
    producer: nameSchema,
    inStock: booleanSchema,
  });

  async function handleSubmit({
    name,
    color,
    producer,
    ...otherValues
  }: typeof initialValues) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      const updatedProduct = {
        name: formatName(name),
        color: formatName(color),
        producer: formatName(producer),
        updatedAt: new Date(),
        ...otherValues,
      };
      await updateDoc(user!.uid!, 'products', product.id, updatedProduct);
      setOpen(false);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Product has been updated."
        />,
        {
          icon: SuccessIcon,
        }
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Oops! Something went wrong"
          description={errorMessage}
        />,
        {
          icon: ErrorIcon,
        }
      );
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="update-product-dialog-trigger"
          aria-label="update product"
        >
          <UpdateIconRounded />
        </Button>
      </DialogTrigger>
      <DialogContent className="update-product-form-dialog-content">
        <DialogHeader>
          <DialogTitle>Update product</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Update product in your data products.
        </DialogDescription>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="form-update-product">
              <fieldset disabled={isSubmitting} className="form-fieldset">
                <FormField label="Name" id="name" name="name" />
                <FormField label="Color" id="color" name="color" />
                <FormField
                  type="number"
                  label="Price"
                  id="price"
                  name="price"
                />
                <FormField label="Producer" id="producer" name="producer" />
                <CheckboxField
                  label="Is this product in stock?"
                  id="inStock"
                  name="inStock"
                />
              </fieldset>
              <div className="form-actions">
                <Button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingIcon className="loading-icon" />
                  ) : (
                    'Update product'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

function DeleteComponent({ productId }: { productId: string }) {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  async function handleDelete() {
    try {
      await deleteDoc(user!.uid!, 'products', productId);
      setOpen(false);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Product has been deleted."
        />,
        {
          icon: SuccessIcon,
        }
      );
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      toast.error(
        <ToastMessage
          title="Oops! Something went wrong"
          description={errorMessage}
        />,
        {
          icon: ErrorIcon,
        }
      );
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="delete-product-alert-dialog-trigger"
          aria-label="Delete product"
        >
          <DeleteIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="delete-product-alert-dialog-content">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            product from your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Formik initialValues={{}} onSubmit={handleDelete}>
          {({ isSubmitting }) => (
            <Form className="form-delete-product">
              <div className="form-actions">
                <AlertDialogCancel asChild>
                  <Button variant="outline">Cancel</Button>
                </AlertDialogCancel>
                <Button
                  type="submit"
                  variant="destructive"
                  className="submit-button"
                  shadow
                  transform
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <LoadingIcon className="loading-icon" />
                  ) : (
                    'Delete'
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </AlertDialogContent>
    </AlertDialog>
  );
}
