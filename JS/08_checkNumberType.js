function checkNumberType(num) {
    
    if (num < 0)
    {
      return "Negative"
    }
    else if (num > 0)
    {
      return "Positive"
    }
    else
    {
      return "Zero"
    }
  }

  console.log(checkNumberType(-3))