import ItemCount from '../ItemCount/ItemCount'
import Price from '../Price/Price'
import Balancer from 'react-wrap-balancer'

function ItemDetail ({ ...props }) {
  const {
    id, name, category, brand,
    stock, price, priceCurrency,
    images, banner, description, features
  } = { ...props }

  return (
    <article className='container flex flex-col gap-6'>
      <header
        className='flex flex-row-reverse justify-between w-full gap-6'
      >
        {/* Product Info */}
        <div
          className='flex flex-col gap-4 text-xl basis-2/5 '
        >
          {/* Tags */}
          <div className='flex flex-row gap-4'>
            {[brand, category].map((tag) => {
              return (
                <div
                  key={tag}
                  className='gap-2 p-4 badge badge-xl badge-outline badge-accent'
                >
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-4 h-4 stroke-current'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' /></svg>
                  {tag}
                </div>
              )
            })}
          </div>
          <h1
            className='text-3xl font-bold card-title'
          >{name}
          </h1>
          <div>
            Precio exclusivo:
            <div className='ml-2 tooltip tooltip-right' data-tip='Transferencia, depósito o efectivo'>
              <button className='badge badge-sm align-super text-bold'>i</button>
            </div>
            <Price
              className='text-xl text-info ' price={price} currency={priceCurrency}
            />
          </div>
          <p>Stock disponible: {stock}</p>
          <div className='gap-2 p-4 badge badge-xl badge-success'>
            Envío gratuito a domicilio
          </div>
        </div>

        <figure>
          <img src={images[0]} />
        </figure>
        {/* TODO: Carousel */}
        {/*         <div
          className='w-1/2 carousel'
        >
          {images.map((image, index) => (
            <div
              key={index}
              id={`slide${index}`} className='relative w-full carousel-item'
            >
              <img src={image} className='w-full' />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href={`slide${index - 1}`} className='btn btn-circle'>❮</a>
                <a href={`slide${index + 1}`} className='btn btn-circle'>❯</a>
              </div>
            </div>
          ))}
        </div> */}
        <figure />
      </header>
      <main
        className='flex flex-col items-center gap-6 p-6 card bg-base-100'
      >
        <figure>
          <img src={banner} alt={`Banner del producto ${name}`} />
        </figure>
        <section className='flex flex-col items-center gap-4 p-6'>
          <h2
            className='text-2xl card-title'
          >{name}
          </h2>
          <p
            className='text-lg'
          >
            {description}
          </p>
        </section>
        <section className='flex flex-col items-center gap-4 p-6'>
          <h2 className='text-2xl card-title'>
            Especificaciones
          </h2>
          <div className='grid grid-cols-4 gap-6'>
            {
              Object.entries(features).map(([key, value]) => {
                return (
                  <div
                    key={key}
                    className='relative flex flex-row gap-2 p-6 pt-16 card bg-slate-100'
                  >
                    <div
                      className='absolute w-16 rounded-lg top-1 right-1 aspect-square'
                    >
                      <img
                        src={`/public/feature-icons/${key}.png`} alt='cpu-icon'
                      />
                    </div>
                    <div>
                      <h3 className='pb-2 text-xl card-title text-primary'>
                        <Balancer>{value.title}</Balancer>
                      </h3>
                      <p
                        className='text-sm'
                      >
                        <Balancer>
                          {value.text.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}
                        </Balancer>
                      </p>
                    </div>
                  </div>
                )
              }
              )
}
          </div>
        </section>
      </main>
    </article>
  )
}

export default ItemDetail
