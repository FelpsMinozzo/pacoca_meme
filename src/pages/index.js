import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import pa1 from '../public/paçoca-1.webp'
import pa2 from '../public/paçoca-2.jpg'
import pa3 from '../public/paçoca-3.jpeg'
//import pa4 from '../public/paçoca-4.webp'


const Home = () =>{
    return(
        <div className='Div1'>
            <div>
                <Link href='http://pudim.com.br/' className='pacoca'>
                    <h1 className='pacoca'>Página sobre Paçoca</h1>
                </Link>
            </div>
                <div className='box'>
                    <Link href='https://www.youtube.com/watch?v=pfJl4jMjAno&pp=ygUTcGF1bGluaG8gYmFjYW5hIDFocg%3D%3D' className='materia'>
                            <Image src={pa1} 
                            alt="Paçoca Retangular"
                            width={300}
                            height={200}
                            sizes="10vw"
                            style={{ width: '25%', height: 'auto' }} />

                            <p>Deliciosamente tentadora e inconfundível,<br/>
                            a paçoca retangular é uma iguaria que conquista o paladar de todos os apaixonados por sabores brasileiros.<br/>
                            Com seu formato geométrico, esta guloseima encanta os olhos antes mesmo de ser degustada.</p>
                    </Link>
                </div>

                <div className='box'>
                <Link href='https://www.youtube.com/watch?v=I_SD6axWzd0' className='materia'>
                            <Image src={pa2} 
                                alt="Paçoca Cilindrica"
                                width={300}
                                height={200}
                                sizes="10vw"
                                style={{ width: '25%', height: 'auto' }} />

                                <p>A paçoca cilíndrica é uma versão única e moderna do clássico doce brasileiro.<br/>  
                                Com um formato inovador, ela se destaca por sua apresentação em um cilindro compacto, <br/> 
                                perfeitamente moldado para proporcionar uma experiência visual e gustativa única.</p>
                    </Link>    
                </div>

                <div className='box'>
                    <Link href='https://www.youtube.com/watch?v=aa6RZ73jLF8&pp=ygUPZGFub27Do28gZ3Jvc3Nv' className='materia'>
                            <Image src={pa3} 
                                alt="Paçoca Farofa"
                                width={300}
                                height={200}
                                sizes="10vw"
                                style={{ width: '25%', height: 'auto' }} />

                                <p>A paçoca salgada tipo farofa com carne seca é uma deliciosa iguaria <br/>que combina a riqueza dos sabores brasileiros em uma única e irresistível mordida. <br/>
                                Inspirada na tradicional paçoca doce, esta versão salgada apresenta uma textura crocante e um equilíbrio perfeito entre <br/> 
                                o sabor da carne seca e o toque especial da farofa.</p>
                    </Link>
                </div>
        </div>
    )
}

export default Home;