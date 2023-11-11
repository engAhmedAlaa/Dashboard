import { ReactNode, createContext, useEffect, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { useErrorBoundary } from 'react-error-boundary';
import { db } from '../firebase/firestore';
import { useAuth } from '../hooks/use-auth';
import { UserDataType, UserDataTypeFS } from '../types/user-data.type';
import { ClientType, ClientTypeFS } from '../types/client.type';
import { ProductType, ProductTypeFS } from '../types/product.type';
import { OrderType, OrderTypeFS } from '../types/order.type';
import LoadingComponent from '../components/loading-component/LoadingComponent';

const initialState: {
  userData: UserDataType;
  clients: ClientType[];
  products: ProductType[];
  orders: OrderType[];
} = {
  userData: {
    firstName: '',
    lastName: '',
    gender: '',
    country: '',
    dateOfBirth: undefined,
    language: '',
    phoneNumber: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  clients: [],
  products: [],
  orders: [],
};

export const DataContext = createContext(initialState);

export default function DataProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserDataType>(initialState.userData);
  const [clients, setClients] = useState<ClientType[]>(initialState.clients);
  const [products, setProducts] = useState<ProductType[]>(
    initialState.products
  );
  const [orders, setOrders] = useState<OrderType[]>(initialState.orders);
  const [isLoading, setIsLoading] = useState({
    userData: true,
    clients: true,
    products: true,
    orders: true,
  });
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const docRef = doc(db, 'users', user!.uid);
    const unsubscribe = onSnapshot(
      docRef,
      (doc) => {
        if (!navigator.onLine)
          showBoundary(
            new FirebaseError(
              'firestore/network-request-failed',
              'Network request failed'
            )
          );
        if (!doc.exists()) showBoundary(new Error("Doesn't exist"));
        const userDataFS = doc.data() as UserDataTypeFS;
        const userData = {
          ...userDataFS,
          dateOfBirth:
            userDataFS.dateOfBirth &&
            new Date(userDataFS.dateOfBirth.seconds * 1000),
          createdAt: new Date(userDataFS.createdAt.seconds * 1000),
          updatedAt: new Date(userDataFS.updatedAt.seconds * 1000),
        };

        setUserData(userData);
        setIsLoading((prevState) => ({
          ...prevState,
          userData: false,
        }));
      },
      (error) => {
        showBoundary(error);
      }
    );

    return unsubscribe;
  }, [user, showBoundary]);

  useEffect(() => {
    const collectionRef = collection(db, 'users', user!.uid, 'clients');
    const unsubscribe = onSnapshot(
      collectionRef,
      (collection) => {
        if (!navigator.onLine)
          showBoundary(
            new FirebaseError(
              'firestore/network-request-failed',
              'Network request failed'
            )
          );
        const clientsFS = collection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ClientTypeFS[];
        const clients = clientsFS
          .map((client) => ({
            ...client,
            updatedAt: new Date(client.updatedAt.seconds * 1000),
            addedAt: new Date(client.addedAt.seconds * 1000),
          }))
          .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

        setClients(clients);
        setIsLoading((prevState) => ({
          ...prevState,
          clients: false,
        }));
      },
      (error) => {
        showBoundary(error);
      }
    );

    return unsubscribe;
  }, [user, showBoundary]);

  useEffect(() => {
    const collectionRef = collection(db, 'users', user!.uid, 'products');
    const unsubscribe = onSnapshot(
      collectionRef,
      (collection) => {
        if (!navigator.onLine)
          showBoundary(
            new FirebaseError(
              'firestore/network-request-failed',
              'Network request failed'
            )
          );
        const productsFS = collection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ProductTypeFS[];
        const products = productsFS
          .map((product) => ({
            ...product,
            updatedAt: new Date(product.updatedAt.seconds * 1000),
            addedAt: new Date(product.addedAt.seconds * 1000),
          }))
          .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

        setProducts(products);
        setIsLoading((prevState) => ({
          ...prevState,
          products: false,
        }));
      },
      (error) => {
        showBoundary(error);
      }
    );

    return unsubscribe;
  }, [user, showBoundary]);

  useEffect(() => {
    const collectionRef = collection(db, 'users', user!.uid, 'orders');
    const unsubscribe = onSnapshot(
      collectionRef,
      (collection) => {
        if (!navigator.onLine)
          showBoundary(
            new FirebaseError(
              'firestore/network-request-failed',
              'Network request failed'
            )
          );
        const ordersFS = collection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as OrderTypeFS[];
        const orders = ordersFS
          .map((order) => ({
            ...order,
            updatedAt: new Date(order.updatedAt.seconds * 1000),
            addedAt: new Date(order.addedAt.seconds * 1000),
          }))
          .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

        setOrders(orders);
        setIsLoading((prevState) => ({
          ...prevState,
          orders: false,
        }));
      },
      (error) => {
        showBoundary(error);
      }
    );

    return unsubscribe;
  }, [user, showBoundary]);

  const value = {
    userData,
    clients,
    products,
    orders,
  };

  if (
    isLoading.userData ||
    isLoading.clients ||
    isLoading.products ||
    isLoading.orders
  )
    return <LoadingComponent />;

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
