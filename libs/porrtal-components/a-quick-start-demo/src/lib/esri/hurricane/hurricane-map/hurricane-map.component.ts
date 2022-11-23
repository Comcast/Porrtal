import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import Legend from '@arcgis/core/widgets/Legend';
import * as RendererProperties from '@arcgis/core/renderers';

@Component({
  selector: 'porrtal-hurricane-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hurricane-map.component.html',
  styleUrls: ['./hurricane-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HurricaneMapComponent implements AfterViewInit {
  @Input() viewState?: ViewState;
  @ViewChild('mapRef') mapRef?: ElementRef;

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    if (this.mapRef) {
      const renderer = {
        type: 'simple', // autocasts as new SimpleRenderer()
        symbol: {
          type: 'point-3d', // autocasts as new PointSymbol3D()
          symbolLayers: [
            {
              type: 'object', // autocasts as new ObjectSymbol3DLayer()
              resource: {
                primitive: 'cone',
              },
              width: 50000, // width of the symbol in meters
            },
          ],
        },
        label: 'hurricane location',
        visualVariables: [
          {
            type: 'color',
            field: 'PRESSURE',
            stops: [
              {
                value: 950,
                color: 'red',
              },
              {
                value: 1020,
                color: 'blue',
              },
            ],
          },
          {
            type: 'size',
            field: 'WINDSPEED',
            stops: [
              {
                value: 20,
                size: 60000,
              },
              {
                value: 150,
                size: 500000,
              },
            ],
            axis: 'height',
          },
          {
            type: 'size',
            axis: 'width-and-depth',
            useSymbolValue: true, // uses the width value defined in the symbol layer (50,000)
          },
        ],
      };

      // set the renderer on the layer
      const hurricaneLayer = new FeatureLayer({
        url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Hurricanes/MapServer/0',
        renderer: renderer as unknown as RendererProperties.SimpleRenderer,
      });

      // add the layer to a new map
      const map = new Map({
        basemap: 'oceans',
        layers: [hurricaneLayer],
      });

      // The initial camera of the view
      const initCam = {
        // autocasts as new Camera()
        position: {
          // autocasts as new Point()
          x: -7094839,
          y: -113987,
          z: 8032780,
          spatialReference: {
            // autocasts as new SpatialReference()
            wkid: 3857,
          },
        },
        heading: 358.8,
        tilt: 13.7,
      };

      // add the map to a new 3d view
      const view = new SceneView({
        map: map,
        container: this.mapRef.nativeElement,
        camera: initCam,
        environment: {
          lighting: {
            type: 'virtual',
          },
        },
        // ui: { components: [] }
      });

      const legend = new Legend({
        view: view,
      });

      view.ui.add(legend, 'bottom-left');
    }
  }
}
