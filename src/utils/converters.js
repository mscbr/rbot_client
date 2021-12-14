
export const profitToProcent = (profitFloat) => {
  if (profitFloat <= 1) return "0%";
  const arr = profitFloat.toFixed(3).toString().split('.')[1].split('');
  return arr[0] + arr[1] + '.' + arr[2] + '%';
};