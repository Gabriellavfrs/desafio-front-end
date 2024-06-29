export const formatPhone = (phone: string) => {
  const regex = /^(\d{2})(\d{2})(\d{5})(\d{4})$/;
  return phone.replace(regex, "+$1 ($2) $3-$4");
};