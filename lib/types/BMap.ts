import {
  BGeolocationConstructor,
  BMapTypeControlConstructor,
  BNavigationControlConstructor,
  BOverviewMapControlConstructor,
  BPanoramaControlConstructor,
  BScaleControlConstructor
} from './Control'
import { BIconConstructor } from './Icon'
import { BInfoWindowConstructor } from './InfoWindow'
import { BLabelConstructor } from './Label'
import { BMapConstructor } from './Map'
import { BMarkerConstructor } from './Marker'
import { BPolylineConstructor } from './Polyline'
import { BPointConstructor } from './Point'
import { BSizeConstructor } from './Size'
import { BCircleConstructor } from './Circle'
import { BPolygonConstructor } from './Polygon'

export interface BMap {
  Map: BMapConstructor
  Marker: BMarkerConstructor
  Polyline: BPolylineConstructor
  Circle: BCircleConstructor
  Polygon: BPolygonConstructor
  Point: BPointConstructor
  Size: BSizeConstructor
  Icon: BIconConstructor
  Label: BLabelConstructor
  InfoWindow: BInfoWindowConstructor
  NavigationControl: BNavigationControlConstructor
  OverviewMapControl: BOverviewMapControlConstructor
  ScaleControl: BScaleControlConstructor
  MapTypeControl: BMapTypeControlConstructor
  GeolocationControl: BGeolocationConstructor
  PanoramaControl: BPanoramaControlConstructor
}