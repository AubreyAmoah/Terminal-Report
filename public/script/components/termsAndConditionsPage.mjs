import { loadingPage } from './loadingPage.mjs';

const root = document.getElementById('root');
let termsPage = () => {
    switch (document.readyState) {
        case 'loading':
            loadingPage();
            break;
        case 'interactive':
            return (
                root.innerHTML = `
                    <div class="termsandconditions absolute__center">
                        <div class="termsandconditions__heading">By Clicking on accept you agree to our terms and conditions</div>
                        <div class="termsandconditions__form absolute__center">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolore laudantium totam ipsam iste nobis eaque eum blanditiis consequuntur. Ducimus facere amet suscipit est autem voluptate officiis excepturi ratione? Dolor!
                            Maxime autem corrupti culpa laboriosam! Quas facere repellat earum dolores atque, eaque eum voluptates aliquam tenetur id officia eius in dicta. Velit accusamus nam unde harum voluptate quae, nihil ducimus!
                            Quos possimus pariatur sequi aperiam, temporibus doloribus dolor ex commodi ducimus, non itaque facilis minus tenetur, ad cumque asperiores iste maxime molestias eveniet similique fuga dolore impedit! Necessitatibus, atque iste.
                            Necessitatibus earum eaque cumque perspiciatis expedita inventore placeat dolores quisquam adipisci similique iure laudantium ratione esse deleniti quae veritatis excepturi quibusdam mollitia eius aliquid, debitis asperiores tempore sequi ipsa? Optio.
                            Ab quas perspiciatis quae velit facilis exercitationem consequuntur impedit dolor amet. Ratione aliquid illo nihil. Placeat ab eligendi quos? Cumque magnam sit voluptas tempore commodi. Repudiandae repellat similique optio ut.
                            Accusantium, aliquid reprehenderit magnam quam amet nisi libero quidem non quis. Tempora in officiis id harum eveniet modi, eligendi odio, iste autem pariatur voluptatem nesciunt assumenda distinctio. Cum, incidunt culpa.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis inventore, est, reprehenderit dicta quam sequi obcaecati nesciunt, sunt optio quos esse accusamus minima numquam praesentium ullam nemo corporis quas rerum?
                            Eum ipsum sit et non placeat maiores error facilis eaque dolore, a quia enim magni perspiciatis nesciunt nemo cumque quaerat qui. Sunt, a? Itaque minima atque dolorem fugit voluptatum delectus?
                            Corporis numquam nihil velit sequi adipisci nobis porro consequatur officiis tempore? Id ipsa at, nulla libero magnam porro hic dolorem dolores dicta voluptas blanditiis vero culpa modi doloremque tempore recusandae!
                            Suscipit ipsa eaque dolores unde numquam facere. Nostrum esse nemo, exercitationem quae aperiam facere optio earum eum magnam, soluta, laborum sed maxime placeat officiis quod accusamus doloribus vel sit ratione.
                            Aspernatur quas recusandae omnis nisi, tenetur consequuntur nostrum, mollitia quae quibusdam, doloremque fugit dolore numquam sunt corrupti labore magni cumque. Quae, neque quis velit atque consequuntur nihil consequatur ut! Sit!
                            Nulla ratione laboriosam impedit ipsa, voluptatum, corrupti molestiae obcaecati at et tempora iusto reiciendis. Cumque soluta vel ab temporibus? Eaque reiciendis, eos distinctio placeat culpa vero consectetur quasi aliquid dolorum.
                            Ipsa debitis cupiditate saepe quaerat nobis quis autem? Molestiae praesentium rerum suscipit iste saepe corporis, ex iure aliquam, perspiciatis amet aut fugit asperiores possimus, debitis impedit tempora est sapiente necessitatibus.
                            Cum aperiam qui inventore aut deserunt distinctio voluptatibus earum nihil quis omnis voluptate dignissimos culpa similique est voluptas accusantium magni, ab consectetur eos necessitatibus debitis esse dicta fuga? Quia, ipsam.
                            Exercitationem ex distinctio, placeat quibusdam similique corrupti molestias, minima praesentium ducimus neque sunt voluptate quod ad fuga consequatur? Adipisci inventore animi totam, ipsa alias fugit numquam ex temporibus ipsum soluta.
                            Aliquam accusantium totam aliquid voluptate quos alias vitae repellat voluptatem! Voluptatibus a ipsum nostrum maiores quae totam velit similique est asperiores officiis perspiciatis eius delectus assumenda sed ipsa, animi reprehenderit!
                        </div>
                        <div class="termsandconditions__buttons">
                            <button class="termsandconditions__buttons--accept">accept</button>
                            <button class="termsandconditions__buttons--decline">decline</button>
                        </div>
                </div>
                `
            )
    }
}

export {termsPage}