import { Metadata } from "next";

export interface MetadataPage extends Metadata {
  title: string;
  description: string;
  manifest?: string;
}
