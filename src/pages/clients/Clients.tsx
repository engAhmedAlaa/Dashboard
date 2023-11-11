import { useTitle } from 'react-use';
import { useMemo, useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { object } from 'yup';
import { ClientType } from '../../types/client.type';
import { useAuth } from '../../hooks/use-auth';
import { useData } from '../../hooks/use-data';
import { addDoc, deleteDoc, updateDoc } from '../../firebase/firestore';
import { countries } from '../../data/countries';
import {
  formatEmail,
  formatName,
  formatPhoneNumber,
} from '../../utils/formatFields';
import { getErrorMessage } from '../../utils/getErrorMessage';
import {
  ageSchema,
  booleanSchema,
  emailSchema,
  nameSchema,
  phoneSchema,
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
import ComboboxField from '../../components/combobox-field/ComboboxField';
import './clients.scss';

export function Clients() {
  useTitle('Clients | Dashboard');
  const { clients } = useData();

  const columns = useMemo<ColumnDef<ClientType>[]>(
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
        accessorKey: 'firstName',
        header: 'First name',
        cell: ({ row }) => {
          const value = row.getValue<string>('firstName');

          return (
            <div className="data-table-cell first-name-cell" title={value}>
              {value}
            </div>
          );
        },
      },
      {
        accessorKey: 'lastName',
        header: 'Last name',
        cell: ({ row }) => {
          const value = row.getValue<string>('lastName');

          return (
            <div className="data-table-cell last-name-cell" title={value}>
              {value}
            </div>
          );
        },
      },
      {
        accessorKey: 'email',
        header: 'Email',
        cell: ({ row }) => {
          const value = row.getValue<string>('email');

          return (
            <div className="data-table-cell email-cell" title={value}>
              {value}
            </div>
          );
        },
      },
      {
        accessorKey: 'age',
        header: 'Age',
        cell: ({ row }) => {
          const value = row.getValue<number>('age');

          return (
            <div className="data-table-cell age" title={`${value}`}>
              {value}
            </div>
          );
        },
      },
      {
        accessorKey: 'country',
        header: 'Country',
        cell: ({ row }) => {
          const value = row.getValue<string>('country');
          const label = countries.find(
            (countryItem) => value === countryItem.value
          )?.label;

          return (
            <div className="data-table-cell" title={label}>
              {label}
            </div>
          );
        },
      },
      {
        accessorKey: 'phoneNumber',
        header: 'Phone number',
        cell: ({ row }) => {
          const value = row.getValue<string>('phoneNumber');

          return (
            <div className="data-table-cell" title={value}>
              {value}
            </div>
          );
        },
      },
      {
        accessorKey: 'verified',
        header: 'Verified',
        cell: ({ row }) => {
          const value = row.getValue<boolean>('verified');

          return (
            <div className="verified-cell" title={value ? 'Yes' : 'No'}>
              {value ? <CheckIcon /> : <CloseIcon />}
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
            <div className="data-table-cell added-at-cell" title={formatted}>
              {formatted}
            </div>
          );
        },
      },
      {
        id: 'actions',
        cell: ({ row }) => {
          const client = row.original;

          return (
            <div className="actions-cell">
              <CopyComponent clientId={client.id} />
              <UpdateComponent client={client} />
              <DeleteComponent clientId={client.id} />
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
    <div className="clients">
      <Title title="Clients" />
      <DataTable
        columns={columns}
        data={clients}
        slug="clients"
        AddComponent={AddComponent}
      />
    </div>
  );
}

export default Clients;

function CopyComponent({ clientId }: { clientId: string }) {
  function handleCopy() {
    toast.dismiss();
    toast.clearWaitingQueue();
    navigator.clipboard.writeText(clientId);
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
      className="copy-client-button"
      onClick={handleCopy}
      aria-label="Copy client Id"
    >
      <CopyIcon />
    </Button>
  );
}

function AddComponent() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '+',
    age: '',
    country: '',
    verified: '',
  };
  const validationSchema = object().shape({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    age: ageSchema,
    country: requiredSchema,
    phoneNumber: phoneSchema,
    verified: booleanSchema,
  });

  async function handleSubmit({
    firstName,
    lastName,
    email,
    phoneNumber,
    ...otherValues
  }: typeof initialValues) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      const newClient = {
        firstName: formatName(firstName),
        lastName: formatName(lastName),
        email: formatEmail(email),
        phoneNumber: formatPhoneNumber(phoneNumber),
        addedAt: new Date(),
        updatedAt: new Date(),
        ...otherValues,
      };
      await addDoc(user!.uid!, 'clients', newClient);
      setOpen(false);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Client has been added."
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
        <Button className="add-client-alert-dialog-trigger">
          <AddIcon className="add-icon" />
          Add
        </Button>
      </DialogTrigger>
      <DialogContent className="add-client-form-dialog-content">
        <DialogHeader>
          <DialogTitle>Add client</DialogTitle>
        </DialogHeader>
        <DialogDescription>Add client in your data clients.</DialogDescription>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="form-add-client">
              <fieldset disabled={isSubmitting} className="form-fieldset">
                <FormField label="First name" id="firstName" name="firstName" />
                <FormField label="Last name" id="lastName" name="lastName" />
                <FormField type="email" label="Email" id="email" name="email" />
                <FormField type="number" label="Age" id="age" name="age" />
                <ComboboxField
                  id="country"
                  name="country"
                  label="Country"
                  placeholder="Select country..."
                  list={countries}
                  modal
                />
                <FormField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone number"
                />
                <CheckboxField
                  label="Is this client verified?"
                  id="verified"
                  name="verified"
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
                    'Add client'
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

function UpdateComponent({ client }: { client: ClientType }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const initialValues = {
    firstName: client.firstName,
    lastName: client.lastName,
    email: client.email,
    phoneNumber: client.phoneNumber,
    age: client.age,
    country: client.country,
    verified: client.verified,
  };
  const validationSchema = object().shape({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    age: ageSchema,
    country: requiredSchema,
    phoneNumber: phoneSchema,
    verified: booleanSchema,
  });

  async function handleSubmit({
    firstName,
    lastName,
    email,
    phoneNumber,
    ...otherValues
  }: typeof initialValues) {
    try {
      toast.clearWaitingQueue();
      toast.dismiss();
      const updatedClient = {
        firstName: formatName(firstName),
        lastName: formatName(lastName),
        email: formatEmail(email),
        phoneNumber: formatPhoneNumber(phoneNumber),
        updatedAt: new Date(),
        ...otherValues,
      };
      await updateDoc(user!.uid!, 'clients', client.id, updatedClient);
      setOpen(false);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Client has been updated."
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
          className="update-client-dialog-trigger"
          aria-label="update client"
        >
          <UpdateIconRounded />
        </Button>
      </DialogTrigger>
      <DialogContent className="update-client-form-dialog-content">
        <DialogHeader>
          <DialogTitle>Update client</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Update client in your data clients.
        </DialogDescription>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="form-update-client">
              <fieldset disabled={isSubmitting} className="form-fieldset">
                <FormField label="First name" id="firstName" name="firstName" />
                <FormField label="Last name" id="lastName" name="lastName" />
                <FormField type="email" label="Email" id="email" name="email" />
                <FormField type="number" label="Age" id="age" name="age" />
                <ComboboxField
                  id="country"
                  name="country"
                  label="Country"
                  placeholder="Select country..."
                  list={countries}
                  modal
                />
                <FormField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone number"
                />
                <CheckboxField
                  label="Is this client verified?"
                  id="verified"
                  name="verified"
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
                    'Update client'
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

function DeleteComponent({ clientId }: { clientId: string }) {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  async function handleDelete() {
    try {
      await deleteDoc(user!.uid!, 'clients', clientId);
      setOpen(false);
      toast.success(
        <ToastMessage
          title="Amazing! Success"
          description="Client has been deleted."
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
          className="delete-client-alert-dialog-trigger"
          aria-label="Delete client"
        >
          <DeleteIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="delete-client-alert-dialog-content">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            client from your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Formik initialValues={{}} onSubmit={handleDelete}>
          {({ isSubmitting }) => (
            <Form className="form-delete-client">
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
