import {
  AviIcon,
  DllIcon,
  EspIcon,
  ImageGroupIcon,
  PdfGroupIcon,
  PdfIcon,
  PngIcon,
  PsdIcon,
  TxtIcon,
  ZipIcon,
} from '../components/Icons';

export const files = [
  {
    fileName: 'my-file.pdf',
    size: '5.5MB',
    date: '20/06/2020',
    Icon: PdfIcon,
  },
  {
    fileName: 'my-file.avi',
    size: '12.5MB',
    date: '16/5/2021',
    Icon: AviIcon,
  },
  {
    fileName: 'my-file.eps',
    size: '2.7MB',
    date: '16/5/2021',
    Icon: EspIcon,
  },
  {
    fileName: 'my-file.psd',
    size: '15.1MB',
    date: '16/5/2021',
    Icon: PsdIcon,
  },
  {
    fileName: 'my-file.dll',
    size: '2.2MB',
    date: '16/5/2021',
    Icon: DllIcon,
  },
  {
    fileName: 'my-file.png',
    size: '1.1MB',
    date: '16/5/2021',
    Icon: PngIcon,
  },
  {
    fileName: 'my-file.zip',
    size: '2.1MB',
    date: '16/5/2021',
    Icon: ZipIcon,
  },
  {
    fileName: 'my-file.txt',
    size: '1.2MB',
    date: '16/5/2021',
    Icon: TxtIcon,
  },
  {
    fileName: 'my-file.dll',
    size: '3.2MB',
    date: '16/5/2021',
    Icon: DllIcon,
  },
  {
    fileName: 'my-file.png',
    size: '3.1MB',
    date: '16/5/2021',
    Icon: PngIcon,
  },
];

export const statics = [
  {
    type: 'Pdf',
    size: '3.5GB',
    number: 130,
    Icon: PdfGroupIcon,
  },
  {
    type: 'Images',
    size: '6.5GB',
    number: 115,
    Icon: ImageGroupIcon,
  },
];
