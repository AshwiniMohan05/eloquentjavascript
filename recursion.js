function isEven(x) 
{
  if (x < 0 ) 
  {
        return false
  }
   else if (x % 2 == 0) 
   {
        return true
   } else 
   {
        return isEven(-x)
    
   }
}
console.log(isEven(24));
console.log(isEven(8));
console.log(isEven(-11));
