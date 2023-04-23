import {
  Container,
  Header,
  Information,
  Banner,
  Card,
  ContainerRoundedIcon,
  CardBox,
  Main,
  Products,
} from './styles'

import CartWhite from './../../../public/icons/cart-white.svg'
import TimerWhite from './../../../public/icons/timer-white.svg'
import BoxWhite from './../../../public/icons/box-white.svg'
import CoffeetWhite from './../../../public/icons/coffee-white.svg'
import BannerHome from './../../../public/banner-home.png'
import { Catalog } from './components/Catalog'
import Cooffee from './../../../public/products/Image.png'

export function Home() {
  return (
    <Container>
      <Header>
        <Information>
          <div className='text'>
            <h1>
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </p>
          </div>
          <CardBox>
            <Card>
              <ContainerRoundedIcon color="yellow-dark">
                <img src={CartWhite} alt="" />
              </ContainerRoundedIcon>
              <span>Compra simples e segura</span>
            </Card>
            <Card>
              <ContainerRoundedIcon color="base-text">
                <img src={BoxWhite} alt="" />
              </ContainerRoundedIcon>
              <span>Embalagem mantém o café intacto</span>
            </Card>
            <Card>
              <ContainerRoundedIcon color="yellow">
                <img src={TimerWhite} alt="" />
              </ContainerRoundedIcon>
              <span>Entrega rápida e rastreada</span>
            </Card>
            <Card>
              <ContainerRoundedIcon color="purple">
                <img src={CoffeetWhite} alt="" />
              </ContainerRoundedIcon>
              <span>O café chega fresquinho até você</span>
            </Card>
          </CardBox>
        </Information>
        <Banner>
          <img src={BannerHome} alt="" />
        </Banner>
      </Header>
      <Main>
        <h1>Nossos cafés</h1>
        <Products>
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
          <Catalog 
            image={Cooffee}
            title='Expresso Tradicional'
            type={['Tradicional','Caseiro']}
          />
        </Products>
      </Main>
    </Container>
  )
}