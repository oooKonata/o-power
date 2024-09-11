import AMapLoader from '@amap/amap-jsapi-loader'

window._AMapSecurityConfig = {
  securityJsCode: 'e5a1fc65e4e87debf400098d524e12d6',
}

let geocoder, location, lnglat

AMapLoader.load({
  key: '39371e6e81984c16294bb4aea1351304',
  version: '2.0',
  plugins: ['AMap.Geocoder'],
})
  .then(AMap => {
    geocoder = new AMap.Geocoder()
  })
  .catch(e => {
    console.log(e)
  })

const getPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {

        let position = [pos.coords.longitude, pos.coords.latitude]
        console.log('🍌～～～', position)

        // AMap.convertFrom(position, 'gcj-02', (status, result) => {
        //   if (result.info === 'ok') {
        //     lnglat = result.locations[0]
        //     console.log('🍎～～～~~', lnglat)
        //   }
        // })

        geocoder.getAddress(position, (status, result) => {
          if (status === 'complete' && result.regeocode) {
            location = result.regeocode.addressComponent
            console.log('🍌～～～', location)
          }
        })
      },
      (err) => { console.log('err:' + err) }
    )
  }
}



export { getPosition, location } 