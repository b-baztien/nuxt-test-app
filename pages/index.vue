<script setup lang="ts">
const { data: carousels } = await useFetch("/api/carousel");
const { data: cardMenus } = await useFetch("/api/menu");
const { data: products } = await useFetch("/api/product");
</script>

<template>
  <NuxtLayout>
    <template #header>
      <nav>
        <HeaderInfo />
        <HeaderMenu />
      </nav>
    </template>

    <div class="flex h-full w-full flex-col items-center">
      <ProductCarousel v-if="carousels" :carousels="carousels" />
      <div
        class="mx-auto flex w-full max-w-6xl flex-col items-center gap-y-16 px-10 py-10 sm:max-w-lg md:max-w-5xl"
      >
        <div
          class="mx-auto flex w-full items-center overflow-hidden bg-transparent md:max-w-6xl"
        >
          <div class="container m-auto space-y-8">
            <div
              class="grid grid-cols-2 gap-2 overflow-hidden rounded-xl sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0 xl:grid-cols-6"
            >
              <CardMenu
                v-if="cardMenus"
                v-for="cardMenu in cardMenus"
                :imagePath="cardMenu.imagePath"
                :title="cardMenu.title"
              />
            </div>
          </div>
        </div>
        <div class="flex w-full flex-col gap-y-3">
          <HighlightTitle title="ข้อเสนอพิเศษ" link="#" />
          <div
            class="grid grid-cols-2 gap-3 overflow-hidden rounded-xl py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:divide-y-0 xl:grid-cols-6"
          >
            <CardProduct
              v-for="product in products"
              :title="product.title"
              :image-path="product.imagePath"
              :link="product.link"
              cardType="circle"
            />
          </div>
        </div>
        <div class="flex w-full flex-col gap-y-3">
          <HighlightTitle title="การจัดอันดับ" link="#" />
          <div
            class="grid grid-cols-1 gap-3 sm:grid-cols-1 lg:grid-cols-2 lg:divide-y-0 xl:grid-cols-2"
          >
            <CardRanking
              title="เกมที่มียอดเติมเงินยอดนิยม"
              :products="products"
              link="#"
              cardType="circle"
            />
            <CardRanking
              title="บัตรเติมเงินยอดนิยม"
              :products="products"
              link="#"
              cardType="square"
            />
          </div>
        </div>
        <div class="flex w-full flex-col gap-y-3">
          <HighlightTitle title="เติมเกมออนไลน์" link="#" />
          <div
            class="grid grid-cols-2 gap-3 overflow-hidden rounded-xl py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:divide-y-0 xl:grid-cols-6"
          >
            <CardProduct
              v-for="product in products"
              :title="product.title"
              :image-path="product.imagePath"
              :link="product.link"
            />
          </div>
        </div>
        <div class="flex w-full flex-col gap-y-3">
          <HighlightTitle title="ซื้อบัตรเติมเงิน" link="#" />
          <div
            class="grid grid-cols-2 gap-3 overflow-hidden rounded-xl py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:divide-y-0 xl:grid-cols-6"
          >
            <CardProduct
              v-for="product in products"
              :title="product.title"
              :image-path="product.imagePath"
              :link="product.link"
            />
          </div>
        </div>
        <div class="flex w-full flex-col gap-y-3">
          <HighlightTitle title="ซื้อรหัสเกม" link="#" />
          <div
            class="grid grid-cols-2 gap-3 overflow-hidden rounded-xl py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:divide-y-0 xl:grid-cols-6"
          >
            <CardProduct
              v-for="product in products"
              :title="product.title"
              :image-path="product.imagePath"
              :link="product.link"
            />
          </div>
        </div>
        <div class="flex w-full flex-col gap-y-3">
          <div class="flex flex-col items-center justify-center">
            <h2 class="mb-4 text-xl font-semibold md:text-2xl text-gray-800">
              ทำไมถึงต้องใช้บริการของร้าน ?
            </h2>
            <p class="text-sm font-normal text-gray-800">
              มีเกมเมอร์หลายล้านคนที่นิยมใช้ร้านเติมตังค์
              เพื่อเติมเงินหรือซื้อบัตรเติมเกมโปรกต่างๆมากมาย
              เมื่อสั่งซื้อเสร็จรับสินค้าได้เลบทันที
            </p>
          </div>
          <div
            class="grid grid-cols-2 gap-3 py-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4 overflow-hidden"
          >
            <CardInfo
              title="ปลอดภัยหายห่วง"
              description="รับสินค้าได้ทันที"
              image="/save.svg"
            />
            <CardInfo
              title="รวดเร็วไม่กี่คลิ๊ก"
              description="ได้รับสินค้าทันที"
              image="/very-fast.svg"
            />
            <CardInfo
              title="ประหยัดคุ้มค่า"
              description="ได้รับสินค้าทันที"
              image="/safe.svg"
            />
            <CardInfo
              title="สะดวกสบาย"
              description="ไม่ต้องเดินทาง ไม่ต้องรอคิว"
              image="/convenient.svg"
            />
          </div>
        </div>
        <div class="flex w-full flex-col gap-y-3">
          <HighlightTitle title="โปรโมชั่น" link="#" />
          <div
            class="grid grid-cols-2 gap-3 overflow-hidden rounded-xl py-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3"
          >
            <CardPromotion
              v-for="product in products?.slice(0, 3)"
              :title="product.title"
              :image-path="product.imagePath"
              :link="product.link"
              :date="'11/08/2023'"
              :description="'บริการเติมเกมออนไลน์ทั้งเกมมือถือและเกมคอมพิวเตอร์ มีส่วนลดที่สุดในไทย'"
              :author="'Administator'"
            />
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div
        class="mx-auto flex w-full max-w-6xl flex-col items-center px-10 pb-10 sm:max-w-lg md:max-w-5xl md:flex-row"
      >
        <div
          class="flex flex-col items-center justify-center p-6 md:p-0 flex-shrink-0 text-center md:mx-0 sm:w-full md:w-96 md:text-left"
        >
          <div class="flex w-auto items-center justify-end mt-7">
            <img alt="logo" class="my-4 md:h-[4.5rem]" src="/logo.svg" />
          </div>
          <span class="text-left indent-6 text-sm font-light text-white"
            >ร้านเติมเซเว่น
            เป็นเพียงตัวแทนจำหน่ายเท่านั้นไม่มีส่วนเกี่ยวข้องกับองค์กรหรือบุคคลใดๆที่แอบอ้างใช้ชื่อบัญชีธนาคาร
            ร้านเติมเซเว่นเครดิตในเว็บไซต์ใช้สำหรับซื้อสินค้าภายในเว็บไซต์เติมเซเว่นเท่านั้นโปรดระวังมิจฉาชีพแอบอ้างบัญชีเราเพื่อหลอกให้ผู้อื่นจ่ายค่าสินค้าแทน</span
          >
          <div class="mt-4 flex w-full flex-col justify-start gap-y-3">
            <h5 class="text-md text-left font-normal text-white">
              Follow Us On Social
            </h5>
            <div class="inline-flex w-full cursor-pointer gap-x-5 sm:ml-auto">
              <a
                class="text-white duration-150 ease-in-out hover:text-teal-300"
                target="_blank"
                href="https://www.facebook.com/"
              >
                <font-awesome-icon
                  :icon="['fab', 'square-facebook']"
                  size="xl"
                />
              </a>
              <a
                class="text-white duration-150 ease-in-out hover:text-teal-300"
                target="_blank"
                href="https://line.me/"
              >
                <font-awesome-icon :icon="['fab', 'line']" size="xl" />
              </a>
              <a
                class="text-white duration-150 ease-in-out hover:text-teal-300"
                target="_blank"
                href="https://www.instagram.com/"
              >
                <font-awesome-icon
                  :icon="['fab', 'square-instagram']"
                  size="xl"
                />
              </a>
              <a
                class="text-white duration-150 ease-in-out hover:text-teal-300"
                target="_blank"
                href="https://www.youtube.com/"
              >
                <font-awesome-icon
                  :icon="['fab', 'square-youtube']"
                  size="xl"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          class="md:flex-no-wrap container mx-auto flex flex-col flex-wrap px-5 sm:flex-col md:flex-row md:items-center md:py-24 lg:items-start"
        >
          <div
            class="flex flex-grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left"
          >
            <div class="my-10 w-full md:my-0 md:w-1/2 lg:w-2/4">
              <h2
                class="text-xl font-medium capitalize tracking-widest text-white"
              >
                help ?
              </h2>
              <div class="mt-10 flex list-none flex-col gap-y-3">
                <div>
                  <div
                    class="flex w-auto cursor-pointer flex-row items-center gap-x-3 text-sm font-normal text-white duration-150 hover:text-teal-300"
                  >
                    <a href="#">วิธีเติมเงิน</a>
                  </div>
                </div>
                <div>
                  <div
                    class="flex w-auto cursor-pointer flex-row items-center gap-x-3 text-sm font-normal text-white duration-150 hover:text-teal-300"
                  >
                    <a href="#">ประวัติการซื้อ</a>
                  </div>
                </div>
                <div>
                  <div
                    class="flex w-auto cursor-pointer flex-row items-center gap-x-3 text-sm font-normal text-white duration-150 hover:text-teal-300"
                  >
                    <a href="#">FAQ</a>
                  </div>
                </div>
                <div>
                  <div
                    class="flex w-auto cursor-pointer flex-row items-center gap-x-3 text-sm font-normal text-white duration-150 hover:text-teal-300"
                  >
                    <a href="#">เกี่ยวกับเรา</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-0 md:w-1/2 md:px-4 lg:w-2/4">
              <h2
                class="text-xl font-medium capitalize tracking-widest text-white"
              >
                Contact
              </h2>
              <div class="mt-10 flex list-none flex-col gap-y-3">
                <div
                  class="flex w-full flex-row items-center justify-start gap-x-3"
                >
                  <div
                    class="text-white transition duration-150 ease-in-out hover:text-gray-300"
                  >
                    <font-awesome-icon :icon="['fas', 'square-phone']" />
                  </div>
                  <span class="text-sm font-normal text-white">0683951232</span>
                </div>
                <div
                  class="flex w-full flex-row items-center justify-start gap-x-3"
                >
                  <div
                    class="text-white transition duration-150 ease-in-out hover:text-gray-300"
                  >
                    <font-awesome-icon :icon="['fab', 'square-facebook']" />
                  </div>
                  <span class="text-sm font-normal text-white"
                    >Term7eleven.official</span
                  >
                </div>
                <div
                  class="flex w-full flex-row items-center justify-start gap-x-3"
                >
                  <span class="text-sm font-normal text-white"
                    >ให้บริการตั้งแต่เวลา 10.00 - 22.00 น.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>
