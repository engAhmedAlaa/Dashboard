import { useTitle } from 'react-use';
import { useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { object } from 'yup';
import { OrderType } from '../../types/order.type';
import { useAuth } from '../../hooks/use-auth';
import { useData } from '../../hooks/use-data';
import { addDoc, deleteDoc, updateDoc } from '../../firebase/firestore';
import { formatName } from '../../utils/formatFields';
import { getErrorMessage } from '../../utils/getErrorMessage';
import {
  booleanSchema,
  nameSchema,
  priceSchema,
  quantitySchema,
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
import './orders.scss';

export function Orders() {
  useTitle('Orders | Dashboard');
  const { orders } = useData();

  const columns = useMemo<ColumnDef<OrderType>[]>(
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
        accessorKey: 'quantity',
        header: 'Quantity',
        cell: ({ row }) => {
          const value = row.getValue<number>('quantity');

          return (
            <div className="data-table-cell quantity" title={`${value}`}>
              {value}
            </div>
          );
        },
      },
      {
        accessorKey: 'totalPrice',
        header: 'Total price',
        cell: ({ row }) => {
          const value = row.getValue<number>('totalPrice');
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
        accessorKey: 'delivered',
        header: 'Delivered',
        cell: ({ row }) => {
          const value = row.getValue<boolean>('delivered');

          return (
            <div className="delivered" title={value ? 'Yes' : 'No'}>
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
          const order = row.original;

          return (
            <div className="actions-cell">
              <CopyComponent orderId={order.id} />
              <UpdateComponent order={order} />
              <DeleteComponent orderId={order.id} />
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
    <div className="orders">
      <Title title="Orders" />
      <DataTable
        columns={columns}
        data={orders}
        slug="orders"
        AddComponent={AddComponent}
      />
    </div>
  );
}

export default Orders;

function CopyComponent({ orderId }: { orderId: string }) {
  function handleCopy() {
    toast.clearWaitingQueue();
    toast.dismiss();
    navigator.clipboard.writeText(orderId);
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
      className="copy-order-button"
      onClick={handleCopy}
      aria-label="Copy order Id"
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
    totalPrice: '',
    producer: '',
    delivered: false,
    quantity: '',
  };
  const validationSchema = object().shape({
    name: requiredSchema,
    color: requiredSchema,
    totalPrice: priceSchema,
    producer: nameSchema,
    delivered: booleanSchema,
    quantity: quantitySchema,
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
      const newOrder = {
        name: formatName(name),
        color: formatName(color),
        producer: formatName(producer),
        addedAt: new Date(),
        updatedAt: new Date(),
        ...otherValues,
      };
      await addDoc(user!.uid!, 'orders', newOrder);
      setOpen(false);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Order has been added."
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
        <Button className="add-order-alert-dialog-trigger">
          <AddIcon className="add-icon" />
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="add-order-form-dialog-content">
        <DialogHeader>
          <DialogTitle>Add order</DialogTitle>
        </DialogHeader>
        <DialogDescription>Add order in your data orders.</DialogDescription>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="form-add-order">
              <fieldset disabled={isSubmitting} className="form-fieldset">
                <FormField label="Name" id="name" name="name" />
                <FormField label="Color" id="color" name="color" />
                <FormField
                  type="number"
                  label="Quantity"
                  id="quantity"
                  name="quantity"
                />
                <FormField
                  type="number"
                  label="Total price"
                  id="totalPrice"
                  name="totalPrice"
                />
                <FormField label="Producer" id="producer" name="producer" />
                <CheckboxField
                  label="Is this order delivered?"
                  id="delivered"
                  name="delivered"
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
                    'Add order'
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

function UpdateComponent({ order }: { order: OrderType }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const initialValues = {
    name: order.name,
    color: order.color,
    totalPrice: order.totalPrice,
    producer: order.producer,
    delivered: order.delivered,
    quantity: order.quantity,
  };
  const validationSchema = object().shape({
    name: requiredSchema,
    color: requiredSchema,
    totalPrice: priceSchema,
    producer: nameSchema,
    delivered: booleanSchema,
    quantity: quantitySchema,
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
      const updatedOrder = {
        name: formatName(name),
        color: formatName(color),
        producer: formatName(producer),
        updatedAt: new Date(),
        ...otherValues,
      };
      await updateDoc(user!.uid!, 'orders', order.id, updatedOrder);
      setOpen(false);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Order has been updated."
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
          className="update-order-dialog-trigger"
          aria-label="update order"
        >
          <UpdateIconRounded />
        </Button>
      </DialogTrigger>
      <DialogContent className="update-order-form-dialog-content">
        <DialogHeader>
          <DialogTitle>Update order</DialogTitle>
        </DialogHeader>
        <DialogDescription>Update order in your data orders.</DialogDescription>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="form-update-order">
              <fieldset disabled={isSubmitting} className="form-fieldset">
                <FormField label="Name" id="name" name="name" />
                <FormField label="Color" id="color" name="color" />
                <FormField
                  type="number"
                  label="Quantity"
                  id="quantity"
                  name="quantity"
                />
                <FormField
                  type="number"
                  label="Total price"
                  id="totalPrice"
                  name="totalPrice"
                />
                <FormField label="Producer" id="producer" name="producer" />
                <CheckboxField
                  label="Is this order delivered?"
                  id="delivered"
                  name="delivered"
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
                    'Update order'
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

function DeleteComponent({ orderId }: { orderId: string }) {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  async function handleDelete() {
    try {
      await deleteDoc(user!.uid!, 'orders', orderId);
      setOpen(false);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Order has been deleted."
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
          className="delete-order-alert-dialog-trigger"
          aria-label="Delete order"
        >
          <DeleteIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="delete-order-alert-dialog-content">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            order from your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Formik initialValues={{}} onSubmit={handleDelete}>
          {({ isSubmitting }) => (
            <Form className="form-delete-order">
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
