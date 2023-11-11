import { phone } from 'phone';

export function formatName(name: string) {
  return name.trim().replace(/\s+/g, ' ');
}

export function formatEmail(email: string) {
  return email.trim().toLowerCase();
}

export function formatPhoneNumber(phoneNumber: string) {
  return phone(phoneNumber).phoneNumber;
}
