import React from 'react';
import worker1 from '../img/worker1.jpg'
import worker2 from '../img/worker2.jpg'
import worker3 from '../img/worker3.jpg'
import worker4 from '../img/worker4.jpg'

export default function Workers(){
    return(
        <div className='workers'>
            <div className='worker--site'>
                <img src = {worker1} alt="pracownik" className='worker-image'/>
                <div className="workers--info">
                    <h2 className='worker-name'>Emma Smith</h2>
                    <p className='position'>Frontend Developer</p>
                    <p>trzycierz.tk</p>
                </div>

                <div className='workers--social'>
                    <div className='workers--email workers--social-item'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADcUlEQVRoge2ZTUgVURTHf08NolDjoVSGgVYUBC0DsTDow6RFBdGmTUG4k3YFWVGrWrRpJUFQ0KJFENaqCPrSEKIPFII+iEBSgjIyIyw/Xot7Lvc6zby5M2/mPaX3g+E95p57zv/MzL1z7h0oU2ZBkQXOAkPApByDci5bQl2R2AaMArmAYxRoK5k6Rw4Dv1GCHwLbUXcgC+yQczmxOVQijXnJoB4bfdUvARUhdrPyv+g8JfhxSevocxWXiZBILoJtkjhprErLcQJEunB+z/GCpJzIfOO/SqQS6Alo6yP9qbZHNBTEEqDXEzCtRJ54fNttt0VLLOqAAXH0NSCRNNHxdOwB0RSJJuCNOPgIbKB0iawB3sv/D8A6VwebgE/ScQhY5XFcLOx4K4DnmDvUEtZ5NzAhHe4C1QGONVHHiHPt5BOvGrgn5yZEayA/xPAqsCjEcZxEvAM6SiKIpmtyftxu8NZa+g78dAy2NYKwpNDaavIZ2VevH2jwaSsW3nj1wAPmagztPCy/o0BrgOO0seNtwSyfh4mQiJ39H6DLpXPC6HhdoiEnmupdtNgGlcAF1JLU6XYmjHeiuIyZgCIlojmImZJzQHOCYoNotuJNiAabWIkAbATeStsY0BEipAY4DjwDfqH2tV4Cp4BlIX07JEZOYm6MoNPJoAZTQM4Ap/Ff9u7CVAZ+x4jYeMmIzxmx6wVqY+h0MsgA3cC02N2xgnnbBoB9qMGZBXYCj6VtGjiJuRC14ktfpG7y7w0UnIimHXP736GmR1vIGfzXOhXSZl/1VvGhH9t2h/iJJQLQiBoD9mMzRkgNJNjjQB+vcJ9IEk0E4KjV5wWq/HelCSVe9z8SoW9iiVSh3jHa/jrxVnCLgSuWH/tdUZBOl0QaMNunk8Axh8BhdGI2v/uAlSH2BSfSBnzG1DybXZU60IKZtkcwNZ4fBSXSial5HgHLoyp1oA64LzGmgBMBdrESWQrckPOzwHkS2J7JQxVwEVPj+Y2/yImsRa3bc6jV44GExLqwF/gusQdRmxCaSInsAb6Rv+ZJm/XAa9EwDuyX886JnMPc2pvM3YQoNjXALUzVYH8ZC8R+006jBluxvofkI4Oa5qdwXBtpgy+oIm++YU//Tok0FkFUXFaTQq1VKv7RGfQNcSEkMwfvmqG/JCriEWX7tUyZuPwFZqS/XPU++GoAAAAASUVORK5CYII=" alt="Email" className='workers--email-icon'/>
                        <p>Email</p>
                    </div>

                    <div className='workers--linkedin workers--social-item'>
                        <img src="https://toppng.com/public/uploads/thumbnail/linkedin-white-icon-social-media-icon-png-and-vector-1a-logo-11563638575rmvclwzay3.png" alt="Linkedin" className='workers--linkedin-icon'/>
                        <p>Linkedin</p>
                    </div>
                </div>
                <div className='workers--about'>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ullam est quos ipsum odio odit in neque dolores nemo delectus veniam accusamus provident ratione doloribus totam, officia quae cupiditate voluptate. Similique assumenda neque repellat. Dolore consequatur velit vel id placeat.. Accusamus illo recusandae molestias voluptatum corporis? Fuga!</p>
                </div>
                <div className='workers--about'>
                    <h3>Interests</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellat culpa quo minima repudiandae laborum blanditiis sunt similique voluptatibus, explicabo architecto maiores. Deserunt veniam sequi tempore rerum iste sapiente impedit laudantium reprehenderit error</p>
                </div>
            </div>
            <div className='worker--site'>
                <img src = {worker2} alt="pracownik" className='worker-image'/>
                <div className="workers--info">
                    <h2 className='worker-name'>Megan Addison</h2>
                    <p className='position'>Frontend Developer</p>
                    <p>trzycierz.tk</p>
                </div>

                <div className='workers--social'>
                    <div className='workers--email workers--social-item'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADcUlEQVRoge2ZTUgVURTHf08NolDjoVSGgVYUBC0DsTDow6RFBdGmTUG4k3YFWVGrWrRpJUFQ0KJFENaqCPrSEKIPFII+iEBSgjIyIyw/Xot7Lvc6zby5M2/mPaX3g+E95p57zv/MzL1z7h0oU2ZBkQXOAkPApByDci5bQl2R2AaMArmAYxRoK5k6Rw4Dv1GCHwLbUXcgC+yQczmxOVQijXnJoB4bfdUvARUhdrPyv+g8JfhxSevocxWXiZBILoJtkjhprErLcQJEunB+z/GCpJzIfOO/SqQS6Alo6yP9qbZHNBTEEqDXEzCtRJ54fNttt0VLLOqAAXH0NSCRNNHxdOwB0RSJJuCNOPgIbKB0iawB3sv/D8A6VwebgE/ScQhY5XFcLOx4K4DnmDvUEtZ5NzAhHe4C1QGONVHHiHPt5BOvGrgn5yZEayA/xPAqsCjEcZxEvAM6SiKIpmtyftxu8NZa+g78dAy2NYKwpNDaavIZ2VevH2jwaSsW3nj1wAPmagztPCy/o0BrgOO0seNtwSyfh4mQiJ39H6DLpXPC6HhdoiEnmupdtNgGlcAF1JLU6XYmjHeiuIyZgCIlojmImZJzQHOCYoNotuJNiAabWIkAbATeStsY0BEipAY4DjwDfqH2tV4Cp4BlIX07JEZOYm6MoNPJoAZTQM4Ap/Ff9u7CVAZ+x4jYeMmIzxmx6wVqY+h0MsgA3cC02N2xgnnbBoB9qMGZBXYCj6VtGjiJuRC14ktfpG7y7w0UnIimHXP736GmR1vIGfzXOhXSZl/1VvGhH9t2h/iJJQLQiBoD9mMzRkgNJNjjQB+vcJ9IEk0E4KjV5wWq/HelCSVe9z8SoW9iiVSh3jHa/jrxVnCLgSuWH/tdUZBOl0QaMNunk8Axh8BhdGI2v/uAlSH2BSfSBnzG1DybXZU60IKZtkcwNZ4fBSXSial5HgHLoyp1oA64LzGmgBMBdrESWQrckPOzwHkS2J7JQxVwEVPj+Y2/yImsRa3bc6jV44GExLqwF/gusQdRmxCaSInsAb6Rv+ZJm/XAa9EwDuyX886JnMPc2pvM3YQoNjXALUzVYH8ZC8R+006jBluxvofkI4Oa5qdwXBtpgy+oIm++YU//Tok0FkFUXFaTQq1VKv7RGfQNcSEkMwfvmqG/JCriEWX7tUyZuPwFZqS/XPU++GoAAAAASUVORK5CYII=" alt="Email" className='workers--email-icon'/>
                        <p>Email</p>
                    </div>

                    <div className='workers--linkedin workers--social-item'>
                        <img src="https://toppng.com/public/uploads/thumbnail/linkedin-white-icon-social-media-icon-png-and-vector-1a-logo-11563638575rmvclwzay3.png" alt="Linkedin" className='workers--linkedin-icon'/>
                        <p>Linkedin</p>
                    </div>
                </div>
                <div className='workers--about'>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ullam est quos ipsum odio odit in neque dolores nemo delectus veniam accusamus provident ratione doloribus totam.</p>
                </div>
                <div className='workers--about'>
                    <h3>Interests</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellat culpa quo minima repudiandae laborum blanditiis sunt similique voluptatibus, explicabo architecto maiores. Deserunt veniam sequi tempore rerum iste sapiente impedit laudantium reprehenderit error. Accusamus illo recusandae molestias voluptatum corporis, officia quae cupiditate voluptate.</p>
                </div>
            </div>
            <div className='worker--site'>
                <img src = {worker3} alt="pracownik" className='worker-image'/>
                <div className="workers--info">
                    <h2 className='worker-name'>Anna Corey</h2>
                    <p className='position'>Frontend Developer</p>
                    <p>trzycierz.tk</p>
                </div>

                <div className='workers--social'>
                    <div className='workers--email workers--social-item'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADcUlEQVRoge2ZTUgVURTHf08NolDjoVSGgVYUBC0DsTDow6RFBdGmTUG4k3YFWVGrWrRpJUFQ0KJFENaqCPrSEKIPFII+iEBSgjIyIyw/Xot7Lvc6zby5M2/mPaX3g+E95p57zv/MzL1z7h0oU2ZBkQXOAkPApByDci5bQl2R2AaMArmAYxRoK5k6Rw4Dv1GCHwLbUXcgC+yQczmxOVQijXnJoB4bfdUvARUhdrPyv+g8JfhxSevocxWXiZBILoJtkjhprErLcQJEunB+z/GCpJzIfOO/SqQS6Alo6yP9qbZHNBTEEqDXEzCtRJ54fNttt0VLLOqAAXH0NSCRNNHxdOwB0RSJJuCNOPgIbKB0iawB3sv/D8A6VwebgE/ScQhY5XFcLOx4K4DnmDvUEtZ5NzAhHe4C1QGONVHHiHPt5BOvGrgn5yZEayA/xPAqsCjEcZxEvAM6SiKIpmtyftxu8NZa+g78dAy2NYKwpNDaavIZ2VevH2jwaSsW3nj1wAPmagztPCy/o0BrgOO0seNtwSyfh4mQiJ39H6DLpXPC6HhdoiEnmupdtNgGlcAF1JLU6XYmjHeiuIyZgCIlojmImZJzQHOCYoNotuJNiAabWIkAbATeStsY0BEipAY4DjwDfqH2tV4Cp4BlIX07JEZOYm6MoNPJoAZTQM4Ap/Ff9u7CVAZ+x4jYeMmIzxmx6wVqY+h0MsgA3cC02N2xgnnbBoB9qMGZBXYCj6VtGjiJuRC14ktfpG7y7w0UnIimHXP736GmR1vIGfzXOhXSZl/1VvGhH9t2h/iJJQLQiBoD9mMzRkgNJNjjQB+vcJ9IEk0E4KjV5wWq/HelCSVe9z8SoW9iiVSh3jHa/jrxVnCLgSuWH/tdUZBOl0QaMNunk8Axh8BhdGI2v/uAlSH2BSfSBnzG1DybXZU60IKZtkcwNZ4fBSXSial5HgHLoyp1oA64LzGmgBMBdrESWQrckPOzwHkS2J7JQxVwEVPj+Y2/yImsRa3bc6jV44GExLqwF/gusQdRmxCaSInsAb6Rv+ZJm/XAa9EwDuyX886JnMPc2pvM3YQoNjXALUzVYH8ZC8R+006jBluxvofkI4Oa5qdwXBtpgy+oIm++YU//Tok0FkFUXFaTQq1VKv7RGfQNcSEkMwfvmqG/JCriEWX7tUyZuPwFZqS/XPU++GoAAAAASUVORK5CYII=" alt="Email" className='workers--email-icon'/>
                        <p>Email</p>
                    </div>

                    <div className='workers--linkedin workers--social-item'>
                        <img src="https://toppng.com/public/uploads/thumbnail/linkedin-white-icon-social-media-icon-png-and-vector-1a-logo-11563638575rmvclwzay3.png" alt="Linkedin" className='workers--linkedin-icon'/>
                        <p>Linkedin</p>
                    </div>
                </div>
                <div className='workers--about'>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ullam est quos ipsum odio odit in neque dolores nemo delectus veniam accusamus provident ratione doloribus totam, officia quae cupiditate voluptate. Similique assumenda neque repellat. Dolore consequatur velit vel id placeat. Deserunt veniam sequi tempore rerum iste sapiente impedit laudantium reprehenderit error. Accusamus illo recusandae molestias voluptatum corporis? Fuga!</p>
                </div>
                <div className='workers--about'>
                    <h3>Interests</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellat culpa quo minima repudiandae laborum blanditiis sunt similique voluptatibus, explicabo architecto maiores.</p>
                </div>
            </div>
            <div className='worker--site'>
                <img src = {worker4} alt="pracownik" className='worker-image'/>
                <div className="workers--info">
                    <h2 className='worker-name'>Emily Leighton</h2>
                    <p className='position'>Frontend Developer</p>
                    <p>trzycierz.tk</p>
                </div>

                <div className='workers--social'>
                    <div className='workers--email workers--social-item'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADcUlEQVRoge2ZTUgVURTHf08NolDjoVSGgVYUBC0DsTDow6RFBdGmTUG4k3YFWVGrWrRpJUFQ0KJFENaqCPrSEKIPFII+iEBSgjIyIyw/Xot7Lvc6zby5M2/mPaX3g+E95p57zv/MzL1z7h0oU2ZBkQXOAkPApByDci5bQl2R2AaMArmAYxRoK5k6Rw4Dv1GCHwLbUXcgC+yQczmxOVQijXnJoB4bfdUvARUhdrPyv+g8JfhxSevocxWXiZBILoJtkjhprErLcQJEunB+z/GCpJzIfOO/SqQS6Alo6yP9qbZHNBTEEqDXEzCtRJ54fNttt0VLLOqAAXH0NSCRNNHxdOwB0RSJJuCNOPgIbKB0iawB3sv/D8A6VwebgE/ScQhY5XFcLOx4K4DnmDvUEtZ5NzAhHe4C1QGONVHHiHPt5BOvGrgn5yZEayA/xPAqsCjEcZxEvAM6SiKIpmtyftxu8NZa+g78dAy2NYKwpNDaavIZ2VevH2jwaSsW3nj1wAPmagztPCy/o0BrgOO0seNtwSyfh4mQiJ39H6DLpXPC6HhdoiEnmupdtNgGlcAF1JLU6XYmjHeiuIyZgCIlojmImZJzQHOCYoNotuJNiAabWIkAbATeStsY0BEipAY4DjwDfqH2tV4Cp4BlIX07JEZOYm6MoNPJoAZTQM4Ap/Ff9u7CVAZ+x4jYeMmIzxmx6wVqY+h0MsgA3cC02N2xgnnbBoB9qMGZBXYCj6VtGjiJuRC14ktfpG7y7w0UnIimHXP736GmR1vIGfzXOhXSZl/1VvGhH9t2h/iJJQLQiBoD9mMzRkgNJNjjQB+vcJ9IEk0E4KjV5wWq/HelCSVe9z8SoW9iiVSh3jHa/jrxVnCLgSuWH/tdUZBOl0QaMNunk8Axh8BhdGI2v/uAlSH2BSfSBnzG1DybXZU60IKZtkcwNZ4fBSXSial5HgHLoyp1oA64LzGmgBMBdrESWQrckPOzwHkS2J7JQxVwEVPj+Y2/yImsRa3bc6jV44GExLqwF/gusQdRmxCaSInsAb6Rv+ZJm/XAa9EwDuyX886JnMPc2pvM3YQoNjXALUzVYH8ZC8R+006jBluxvofkI4Oa5qdwXBtpgy+oIm++YU//Tok0FkFUXFaTQq1VKv7RGfQNcSEkMwfvmqG/JCriEWX7tUyZuPwFZqS/XPU++GoAAAAASUVORK5CYII=" alt="Email" className='workers--email-icon'/>
                        <p>Email</p>
                    </div>

                    <div className='workers--linkedin workers--social-item'>
                        <img src="https://toppng.com/public/uploads/thumbnail/linkedin-white-icon-social-media-icon-png-and-vector-1a-logo-11563638575rmvclwzay3.png" alt="Linkedin" className='workers--linkedin-icon'/>
                        <p>Linkedin</p>
                    </div>
                </div>
                <div className='workers--about'>
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ullam est quos ipsum odio odit in neque dolores nemo delectus veniam accusamus provident ratione doloribus totam, officia quae cupiditate voluptate. Similique assumenda neque repellat. Dolore consequatur velit vel id placeat.</p>
                </div>
                <div className='workers--about'>
                    <h3>Interests</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus repellat culpa quo minima repudiandae laborum blanditiis sunt similique voluptatibus, explicabo architecto maiores. Deserunt veniam sequi tempore rerum iste sapiente impedit laudantium reprehenderit error. Accusamus illo recusandae molestias voluptatum corporis? Fuga!</p>
                </div>
            </div>
        </div>
            
    )
}