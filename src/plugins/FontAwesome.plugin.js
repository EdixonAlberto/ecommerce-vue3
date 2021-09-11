import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCartArrowDown,
  faSearch,
  faShippingFast,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import { faCreditCard, faHeart, faStar } from '@fortawesome/free-regular-svg-icons'
import {
  faCcDiscover,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faSearch,
  faHeart,
  faShoppingCart,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faCcPaypal,
  faCcMastercard,
  faCcVisa,
  faCcDiscover,
  faStar,
  faCartArrowDown,
  faCreditCard,
  faShippingFast
)

class FontAwesomePlugin {
  static install(laodComponent) {
    return laodComponent('fa', FontAwesomeIcon)
  }
}

export { FontAwesomePlugin }
