export function getRef(name:string,value:string,object:any) {
  return Array.isArray(object[name]) ? object[name][0][value] : object[name][value] 
}

export function setRef(name:string,value:string,valueToChangeTo:any,object:any){
  Array.isArray(object[name]) ? object[name][0][value] = valueToChangeTo : object[name][value] = valueToChangeTo
}