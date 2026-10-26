"use client";
import { TextGenerateEffect } from "./text-generate-effect";

const words = `Dr Rajeev Ranjan is a Senior Consultant Sports Injury & Orthopaedic Surgeon at Paras HMRI, Patna with qualifications including MBBS, MS Orthopaedics & DNB Orthopaedics. He has got his trainings in Sports Injury Surgeries & Arthroplasty from Singapore, Germany and Italy.

Dr Rajeev Ranjan specializes in Sports injuries of Shoulder, knee, ankle & elbow. He has over 16years of experience focusing on Arthroscopic surgeries and Arthroplasty of hip, knee, shoulder and elbow.

He also has vast experience in difficult & complex trauma, including surgeries of Pelviacetabular fractures, Nonunion of bones and Ilizarov surgeries.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
