today = 'today';

    console.log('date is', timestamp());
    console.log('today is', today);

    function timestamp() {
      today = Date();
      return today;
    }

You can start with this config file for jshint:

    {
        "node": true,
        "undef": true
    }
