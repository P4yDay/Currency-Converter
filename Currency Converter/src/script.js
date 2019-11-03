var app = angular.module("MyApp", []).
controller("InvoiceController", function() {
  this.currencies = ["AED"];
  this.inCurr = "AED";
  this.outCurr = "ANG";
  this.inrToForeignRates = {
     "AED":4.099085,
    "AFN":86.942825,
    "ALL":123.448601,
    "AMD":531.344599,
    "ANG":1.935719,
    "AOA":554.262486,
    "ARS":66.480129,
    "AUD":1.616042,
    "AWG":2.009979,
    "AZN":1.902167,
    "BAM":1.956794,
    "BBD":2.249668,
    "BDT":94.465435,
    "BGN":1.955741,
    "BHD":0.420762,
    "BIF":2080.174754,
    "BMD":1.116035,
    "BND":1.518348,
    "BOB":7.714896,
    "BRL":4.483336,
    "BSD":1.11563,
    "BTC":0.000122,
    "BTN":79.162735,
    "BWP":12.260319,
    "BYN":2.29373,
    "BYR":21874.281511,
    "BZD":2.242464,
    "CAD":1.468373,
    "CDF":1858.197739,
    "CHF":1.100873,
    "CLF":0.030181,
    "CLP":832.777029,
    "CNY":7.861572,
    "COP":3782.612474,
    "CRC":648.969688,
    "CUC":1.116035,
    "CUP":29.574921,
    "CVE":110.317861,
    "CZK":25.515346,
    "DJF":198.341322,
    "DKK":7.469649,
    "DOP":58.936032,
    "DZD":133.377532,
    "EGP":18.013808,
    "ERN":16.740536,
    "ETB":32.982847,
    "EUR":1,
    "FJD":2.430445,
    "FKP":0.907203,
    "GBP":0.861462,
    "GEL":3.297914,
    "GGP":0.861422,
    "GHS":6.147346,
    "GIP":0.907202,
    "GMD":57.135015,
    "GNF":10267.557832,
    "GTQ":8.604123,
    "GYD":232.79155,
    "HKD":8.747715,
    "HNL":27.540566,
    "HRK":7.453131,
    "HTG":108.329368,
    "HUF":328.459097,
    "IDR":15695.243398,
    "ILS":3.933022,
    "IMP":0.861422,
    "INR":79.227565,
    "IQD":1325.813037,
    "IRR":46990.644012,
    "ISK":138.086634,
    "JEP":0.861422,
    "JMD":154.271998,
    "JOD":0.791494,
    "JPY":120.571377,
    "KES":115.27964,
    "KGS":77.909274,
    "KHR":4542.837833,
    "KMF":493.23144,
    "KPW":1004.467553,
    "KRW":1303.226691,
    "KWD":0.339051,
    "KYD":0.929758,
    "KZT":433.973781,
    "LAK":9857.055685,
    "LBP":1685.130026,
    "LKR":202.135068,
    "LRD":236.148804,
    "LSL":16.718309,
    "LTL":3.295361,
    "LVL":0.675078,
    "LYD":1.564042,
    "MAD":10.735944,
    "MDL":19.555033,
    "MGA":4089.501166,
    "MKD":61.53031,
    "MMK":1701.954031,
    "MNT":3001.155002,
    "MOP":9.004635,
    "MRO":398.424799,
    "MUR":40.456366,
    "MVR":17.242534,
    "MWK":818.672557,
    "MXN":21.450637,
    "MYR":4.659556,
    "MZN":70.088242,
    "NAD":16.718456,
    "NGN":405.120136,
    "NIO":37.938688,
    "NOK":10.249513,
    "NPR":126.662391,
    "NZD":1.734078,
    "OMR":0.429651,
    "PAB":1.115735,
    "PEN":3.731438,
    "PGK":3.798071,
    "PHP":56.649845,
    "PKR":173.319273,
    "PLN":4.26164,
    "PYG":7199.717536,
    "QAR":4.063484,
    "RON":4.756208,
    "RSD":117.490583,
    "RUB":71.567851,
    "RWF":1033.309028,
    "SAR":4.185324,
    "SBD":9.212127,
    "SCR":15.338622,
    "SDG":50.331593,
    "SEK":10.763152,
    "SGD":1.517422,
    "SHP":1.474173,
    "SLL":10686.032667,
    "SOS":649.532673,
    "SRD":8.323375,
    "STD":24062.591329,
    "SVC":9.762809,
    "SYP":574.758222,
    "SZL":16.902424,
    "THB":33.648372,
    "TJS":10.816483,
    "TMT":3.906122,
    "TND":3.14443,
    "TOP":2.585895,
    "TRY":6.373784,
    "TTD":7.533611,
    "TWD":34.005802,
    "TZS":2570.454758,
    "UAH":27.626814,
    "UGX":4144.685955,
    "USD":1.116035,
    "UYU":41.775831,
    "UZS":10540.491929,
    "VEF":11.146397,
    "VND":25887.752362,
    "VUV":130.668579,
    "WST":2.96914,
    "XAF":656.280296,
    "XAG":0.06174,
    "XAU":0.000738,
    "XCD":3.01614,
    "XDR":0.808558,
    "XOF":656.268522,
    "XPF":119.318781,
    "YER":279.399443,
    "ZAR":16.839869,
    "ZMK":10045.6477,
    "ZMW":14.843945,
    "ZWL":359.363197
  };
  this.inputValue = 10;
  this.outputValue = function(input, inCurr, outCurr) {
    return input * this.inrToForeignRates[outCurr] / this.inrToForeignRates[inCurr];
  };
  this.output = function() {
    return this.outputValue(this.inputValue, this.inCurr, this.outCurr);
  };
});



