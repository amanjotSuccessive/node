for (let year = 2014; year <= 2050; year++)
    {
      let d = new Date(year, 0, 1);
      if ( d.getDay() == 0 )
      console.log("1st January is being a Sunday  "+year);
    }
