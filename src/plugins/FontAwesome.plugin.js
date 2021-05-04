import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

library.add(faSearch, faHeart, faShoppingCart)

class FontAwesomePlugin {
  static install(laodComponent) {
    return laodComponent('fa', FontAwesomeIcon)
  }
}

export { FontAwesomePlugin }
