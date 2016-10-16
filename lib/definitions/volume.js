var metric
  , imperial;
  // , us;

metric = {
  mm3: {
      name: {
        singular: 'Cubic Millimeter'
      , plural: 'Cubic Millimeters'
      }
    , to_anchor: 1/1000000
  }
, cm3: {
    name: {
      singular: 'Cubic Centimeter'
    , plural: 'Cubic Centimeters'
    }
  , to_anchor: 1/1000
  }
, ml: {
    name: {
      singular: 'Millilitre'
    , plural: 'Millilitres'
    }
  , to_anchor: 1/1000
  }
, l: {
    name: {
      singular: 'Litre'
    , plural: 'Litres'
    }
  , to_anchor: 1
  }
, m3: {
    name: {
      singular: 'Cubic meter'
    , plural: 'Cubic meters'
    }
  , to_anchor: 1000
  }
, km3: {
    name: {
      singular: 'Cubic kilometer'
    , plural: 'Cubic kilometers'
    }
  , to_anchor: 1000000000000
  }
};

imperial = {
  tsp: {
    name: {
      singular: 'Teaspoon'
    , plural: 'Teaspoons'
    }
  , to_anchor: 1/6
  }
, Tbs: {
    name: {
      singular: 'Tablespoon'
    , plural: 'Tablespoons'
    }
  , to_anchor: 1/2
  }
, in3: {
    name: {
      singular: 'Cubic inch'
    , plural: 'Cubic inches'
    }
  , to_anchor: 0.55411
  }
, 'fl-oz': {
    name: {
      singular: 'Fluid Ounce'
    , plural: 'Fluid Ounces'
    }
  , to_anchor: 1
  }
, cup: {
    name: {
      singular: 'Cup'
    , plural: 'Cups'
    }
  , to_anchor: 8
  }
, pnt: {
    name: {
      singular: 'Pint'
    , plural: 'Pints'
    }
  , to_anchor: 16
  }
, qt: {
    name: {
      singular: 'Quart'
    , plural: 'Quarts'
    }
  , to_anchor: 32
  }
, gal: {
    name: {
      singular: 'Gallon'
    , plural: 'Gallons'
    }
  , to_anchor: 128
  }
, ft3: {
    name: {
      singular: 'Cubic foot'
    , plural: 'Cubic feet'
    }
  , to_anchor: 957.506
  }
, yd3: {
    name: {
      singular: 'Cubic yard'
    , plural: 'Cubic yards'
    }
  , to_anchor: 25852.7
  }
};

us = {
  'us-tsp': {
    name: {
      singular: 'Teaspoon'
    , plural: 'Teaspoons'
    }
  , to_anchor: 1/6
  }
, 'us-Tbs': {
    name: {
      singular: 'Tablespoon'
    , plural: 'Tablespoons'
    }
  , to_anchor: 1/2
  }
, 'us-fl-oz': {
    name: {
      singular: 'Fluid Ounce'
    , plural: 'Fluid Ounces'
    }
  , to_anchor: 1
  }
, 'us-cup': {
    name: {
      singular: 'Cup'
    , plural: 'Cups'
    }
  , to_anchor: 8
  }
, 'us-pnt': {
    name: {
      singular: 'Pint'
    , plural: 'Pints'
    }
  , to_anchor: 16
  }
, 'us-qt': {
    name: {
      singular: 'Quart'
    , plural: 'Quarts'
    }
  , to_anchor: 32
  }
, 'us-gal': {
    name: {
      singular: 'Gallon'
    , plural: 'Gallons'
    }
  , to_anchor: 128
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, us: us
, _anchors: {
    metric: {
      unit: 'l'
    , ratios: {
        imperial: 33.8140226,
        us: 0.2957353,
      }
    }
  , imperial: {
      unit: 'fl-oz'
    , ratios: {
        metric: 1/33.8140226,
        us: 0.96076,
      }
    }
  , us: {
      unit: 'fl-oz'
    , ratios: {
        metric: 1/0.2957353,
        imperial: 1.04084,
      }
    }
  }
};
