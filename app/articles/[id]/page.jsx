"use client";
import Container from "@/app/components/Container";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import ButtonPrimary from "@/app/components/ButtonPrimary";

const page = () => {
  const [shareUrl, setShareUrl] = useState();

  useEffect(() => {
    if (typeof window != undefined) {
      setShareUrl(window.location.href);
    }
  }, []);
  return (
    <Container>
      <div className="mt-20 lg:mt-40 mx-10 lg:mx-40">
        <h1 className="font-bold text-5xl">
          How To Install and Secure phpMyAdmin on Ubuntu 22.04
        </h1>
        <div className="flex gap-5 items-center mt-5">
          <p className="ms-1 text-gray-500">Published on April 26, 2022</p>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
            Lifestyle
          </span>
        </div>

        <div className="flex flex-col md:flex-row mt-10 justify-between gap-y-10 md:gap-y-0 md:items-center">
          <div className="flex gap-3 items-center">
            <Image
              src={"/user_profile.jpg"}
              referrerPolicy="no-referrer"
              alt="image"
              width={500}
              height={500}
              className="rounded-full w-12 h-12 object-cover"
            />
            <div className="text-content">
              <h1 className="font-medium">Gabby Ameline</h1>
              <p className="text-gray-500 text-sm">Penulis Pemula</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <p className="text-gray-500 font-medium">Bagikan:</p>
            <TelegramShareButton url={shareUrl}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>

            <TwitterShareButton url={shareUrl}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>

            <WhatsappShareButton url={shareUrl}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>

        <div className="mt-10">
          <Image
            src={"/card_image.jpg"}
            alt="image"
            referrerPolicy="no-referrer"
            width={1000}
            height={1000}
            className="rounded-xl"
          />

          <div className="mt-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
              alias atque ea voluptates omnis, iusto quibusdam distinctio
              minima, voluptate perspiciatis quod iste aliquid cumque labore
              officia unde explicabo saepe, nisi reprehenderit libero. Odit
              suscipit sunt placeat. Est officiis ducimus beatae pariatur error
              cum dolores provident magni quaerat aliquid rem facere nulla
              accusantium, nesciunt totam, corrupti tempora eos architecto unde
              consectetur natus? Ratione earum repellat laudantium cupiditate
              quisquam quasi! Est repellendus, vitae saepe at in temporibus
              praesentium deserunt, nemo exercitationem neque vero eligendi
              perferendis. Doloremque accusantium dignissimos, quaerat est
              reprehenderit placeat maxime eos magnam. Magnam quasi placeat
              maiores sunt odit velit magni qui deleniti praesentium culpa
              doloremque, quis ea corrupti ut sequi voluptatibus! Laboriosam
              dolores repellat sapiente beatae, illo vero tempora doloremque
              perspiciatis voluptatem doloribus cumque soluta expedita dicta
              voluptas minus deserunt necessitatibus reiciendis mollitia illum
              magni rem ad modi! Accusantium maiores consectetur officiis
              reprehenderit dolor deleniti velit doloremque id nobis ullam
              repudiandae autem ratione quod, laborum veritatis placeat
              nesciunt. Praesentium magnam hic non porro laboriosam, nam eius
              maxime repudiandae, laborum natus, earum quisquam veritatis enim
              magni optio dolor consequuntur laudantium saepe a nostrum vitae
              necessitatibus tenetur labore harum! Ea omnis deleniti magni
              officia placeat doloremque, quis sequi soluta! Cupiditate
              voluptate, quis rerum, corrupti consequatur similique iusto saepe
              praesentium porro sint quisquam, ad culpa quo veniam? Incidunt
              iure voluptatibus consequatur repellat assumenda laudantium. Ipsam
              facilis natus excepturi sapiente aperiam distinctio est voluptates
              alias veniam! Vero ut quisquam eum animi ad quasi explicabo
              molestiae harum aperiam cum, voluptates distinctio. Perferendis
              dolorum excepturi, repellendus maiores adipisci, velit nobis
              nihil, deleniti reiciendis possimus porro alias architecto in. In
              illo nobis accusantium praesentium dolorem. Incidunt soluta
              molestias, in dignissimos doloribus quis ratione? Dicta laudantium
              ipsa nesciunt distinctio possimus beatae ea id, mollitia, commodi
              ullam, voluptates cum aliquam harum. Facere assumenda ex nemo
              mollitia, obcaecati eum.
            </p>
          </div>

          <div className="mt-20">
            <h1 className="font-bold text-2xl">Ruang Diskusi</h1>
            <div className="mt-5 md:mx-10">
              <div className="flex gap-5 mt-5">
                <Image
                  src={"/user_profile.jpg"}
                  referrerPolicy="no-referrer"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded w-12 h-12 object-cover"
                />
                <p className="max-w-xl border border-blue-200 bg-blue-100 rounded-lg p-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus blanditiis sapiente delectus! Officiis impedit amet
                  voluptatum omnis harum repellat placeat ipsum vitae tempora
                  sequi perspiciatis consequuntur maiores sit nisi in
                  consequatur illo, iusto odit magni mollitia fugit odio alias
                  suscipit! Eos ullam voluptate impedit eum exercitationem quod
                  quas, natus velit ipsum? Quis ea est ipsam natus reprehenderit
                  adipisci, aperiam aut sed, tempora dignissimos hic quaerat
                  ducimus impedit officiis accusantium! Labore recusandae in
                  animi iure amet, eligendi, voluptate aspernatur quia
                  voluptatem quaerat natus et, assumenda accusantium quidem
                  veniam deserunt repudiandae est! Tenetur minima maxime totam.
                  Accusamus omnis soluta laudantium fuga beatae?
                </p>
              </div>
              <div className="flex gap-5 mt-5">
                <Image
                  src={"/user_profile.jpg"}
                  referrerPolicy="no-referrer"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded w-12 h-12 object-cover"
                />
                <p className="max-w-xl border border-blue-200 bg-blue-100 rounded-lg p-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus blanditiis sapiente delectus! Officiis impedit amet
                  voluptatum omnis harum repellat placeat ipsum vitae tempora
                  sequi perspiciatis consequuntur maiores sit nisi in
                  consequatur illo, iusto odit magni mollitia fugit odio alias
                  suscipit! Eos ullam voluptate impedit eum exercitationem quod
                  quas, natus velit ipsum? Quis ea est ipsam natus reprehenderit
                  adipisci, aperiam aut sed, tempora dignissimos hic quaerat
                  ducimus impedit officiis accusantium! Labore recusandae in
                  animi iure amet, eligendi, voluptate aspernatur quia
                  voluptatem quaerat natus et, assumenda accusantium quidem
                  veniam deserunt repudiandae est! Tenetur minima maxime totam.
                  Accusamus omnis soluta laudantium fuga beatae?
                </p>
              </div>
            </div>
          </div>

          <hr className="mt-10" />

          <div className="mt-10">
            <h1 className="font-bold text-2xl">Tinggalkan Jejak</h1>

            <textarea
              id="message"
              rows="8"
              className="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="Write your thoughts here..."
            ></textarea>
            <button className="bg-secondary text-white px-4 py-3 rounded text-sm md:text-md transition-all hover:bg-primary">
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
