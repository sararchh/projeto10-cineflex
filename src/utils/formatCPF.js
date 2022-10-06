export const sanitizeNumber = (val) => String(val).replace(/\D/g, '')

export const formatCPF = (cpfNumber) => {
  let cleaned = sanitizeNumber(cpfNumber);

  if (cleaned.length > 9) {
      cleaned = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
  } else if (cleaned.length > 6) {
      cleaned = cleaned.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
  } else if (cleaned.length > 3) {
      cleaned = cleaned.replace(/(\d{3})(\d{0,3})/, '$1.$2');
  } else {
      cleaned = cleaned.replace(/^(\d*)/, '$1');
  }

  return cleaned.substr(0, 14);
}