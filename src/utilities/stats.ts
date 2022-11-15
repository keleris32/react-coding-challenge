import { IData } from '../types/dataType';

export const numberOfTalentsRequiredPerIndustry = (data: IData[]) => {
  const result = data.reduce((acc, current) => {
    const industry = current.industry;

    // @ts-ignore
    if (acc[industry]) {
      // @ts-ignore
      acc[industry]++;
    } else {
      // @ts-ignore
      acc[industry] = 1;
    }

    return acc;
  }, {});

  // convert result which is an Object to an array of Objects
  const arrOfObjects = Object.entries(result).map((entry) => {
    return { industry: entry[0], count: entry[1] };
  });
  return arrOfObjects;
};
