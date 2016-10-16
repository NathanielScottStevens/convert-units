var metric
  , imperial;

metric = {
  mm: {
    name: {
      singular: 'Millimeter'
    , plural: 'Millimeters'
    }
  , to_anchor: 1/1000
  }
, cm: {
    name: {
      singular: 'Centimeter'
    , plural: 'Centimeters'
    }
  , to_anchor: 1/100
  }
, m: {
    name: {
      singular: 'Meter'
    , plural: 'Meters'
    }
  , to_anchor: 1
  }
, km: {
    name: {
      singular: 'Kilometer'
    , plural: 'Kilometers'
    }
  , to_anchor: 1000
  }
};

imperial = {
  'in': {
    name: {
      singular: 'Inch'
    , plural: 'Inches'
    }
  , to_anchor: 1/12
  }
, ft: {
    name: {
      singular: 'Foot'
    , plural: 'Feet'
    }
  , to_anchor: 1
  }
, mi: {
    name: {
      singular: 'Mile'
    , plural: 'Miles'
    }
  , to_anchor: 5280
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'm'
    , ratios: {
        imperial: 3.281
      }
    }
  , imperial: {
      unit: 'ft'
    , ratios: {
        metric: 1/3.281
      }
    }
  }
};
