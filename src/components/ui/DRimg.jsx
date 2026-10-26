"use client";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function DirectionAwareHoverDemo() {
  const imageUrl =
    "/DR.RAJEEV_RANJAN.jpg";
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Dr Rajeev Ranjan Senior Consultant </p>
        <p className="font-normal text-sm">ORTHOPAEDICS - SPORTS INJURY</p>
        <p className="font-normal text-sm">MBBS, MS, DNB </p>
        <p className="font-normal text-sm">Paras HMRI Patna</p>
      </DirectionAwareHover>
    </div>
  );
}
