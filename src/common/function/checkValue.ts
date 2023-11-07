export const checkLength = (str: string, min: number, max: number): boolean => {
  return str.length >= min && str.length <= max;
};

export const hasOnlyNumber = (str: string) => {
  const regex = /^[0-9]+$/;
  console.log(str);
  console.log(regex.test(str));
  return regex.test(str);
};
