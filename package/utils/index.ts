export function flatTree(tree: any[], childrenKey: string = "children"): any[] {
  return tree
    .map(item => {
      if (item[childrenKey]?.length) {
        return [item, flatTree(item[childrenKey])];
      } else {
        return item;
      }
    })
    .flat(Infinity);
}
