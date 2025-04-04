"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import { ButtonLink } from "@/components/ButtonLink";
import clsx from "clsx";
import { HorizontalLine, VerticalLine } from "../Line";
import { Scribble } from "./Scribble";


type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  customizeUrl: string;
};

type Props = {
  product: Product;
};

const VERTICAL_LINE_CLASSES =
  "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

const HORIZONTAL_LINE_CLASSES =
  "-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

export function PerfumeProduct({ product }: Props) {
  /*const price = `${(product.price / 1000).toFixed(3)} dong`;*/
  const price = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4">
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "left-4")} />
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "right-4")} />
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <div className="flex items-center justify-between text-sm">
        <span>{price}</span>
        <span className="inline-flex items-center gap-1">
          <FaStar className="text-yellow-400" /> 37
        </span>
      </div>

      <div className="-mb-1 overflow-hidden py-4">
        <Scribble className="absolute inset-0 h-full w-full" />
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={150}
          height={150}
          className="mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
        />
      </div>

      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <h3 className="my-2 text-center font-sans leading-tight text-lg">
        {product.name}
      </h3>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ButtonLink href={product.customizeUrl}>Customize</ButtonLink>
      </div>
    </div>
  );
}
