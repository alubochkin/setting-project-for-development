interface ICnProps {
  [key:  string]: boolean
}

export const cn = (cls: string = '', cnProps: ICnProps, classArr?: string[]): string => {
  const className = cls;
  if (classArr?.length) className.concat(classArr.join(' '));

  const classNamePrepair = Object.entries(cnProps).reduce((acc, [key, value]) => {
    if (value) acc += ' ' + key
    return acc
  }, '');

  return (className + classNamePrepair).trim();

}