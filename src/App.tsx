/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  ExternalLink, 
  Sparkles, 
  Code, 
  Palette, 
  Layers, 
  FlaskConical,
  X,
  Compass,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  bnName?: string;
  url: string;
  descriptionBn: string;
  descriptionEn: string;
  importance?: string;
}

interface Category {
  id: string;
  titleBn: string;
  titleEn: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  products: Product[];
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories: Category[] = [
    {
      id: "general",
      titleBn: "সাধারণ ব্যবহারকারী, সার্চ এবং এজেন্ট",
      titleEn: "General Users, Search & Agents",
      icon: Compass,
      color: "text-blue-600",
      bgColor: "bg-blue-50/50",
      borderColor: "border-blue-100",
      products: [
        {
          id: "search-ai",
          name: "Google Search AI Mode Update",
          bnName: "AI Mode in Google Search",
          url: "https://blog.google/products/search/google-search-ai-mode-update/",
          descriptionBn: "গুগল সার্চে কৃত্রিম বুদ্ধিমত্তার নতুন আপডেট ও এআই মোড সংক্রান্ত অফিসিয়াল ঘোষণা।",
          descriptionEn: "Official blog post detailing the integration and updates of generative AI in Google Search."
        },
        {
          id: "mariner",
          name: "Project Mariner - Universal AI Assistant",
          bnName: "Project Mariner",
          url: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-universal-ai-assistant/",
          descriptionBn: "গুগল ডিপমাইন্ডের পরবর্তী প্রজন্মের সার্বজনীন স্বয়ংক্রিয় এআই এজেন্ট ও সহকারী।",
          descriptionEn: "Google DeepMind's publication about building a helpful, universal AI agent for everyday tasks."
        },
        {
          id: "deepthink",
          name: "Gemini Deep Think - Google DeepMind",
          bnName: "Deep Think",
          url: "https://deepmind.google/models/gemini/deep-think/",
          descriptionBn: "জটিল গাণিতিক, বৈজ্ঞানিক ও যৌক্তিক সমস্যা সমাধানের গভীর চিন্তন ক্ষমতাসম্পন্ন মডেল।",
          descriptionEn: "Google DeepMind's highly capable reasoning model optimized for complex STEM and logical tasks."
        },
        {
          id: "flow",
          name: "Use the Google Flow Agent",
          bnName: "Google Flow Agent",
          url: "https://support.google.com/flow/answer/17093911",
          descriptionBn: "স্বয়ংক্রিয় কাজের ধারা ও প্রসেস ম্যানেজ করার গুগল ফ্লো এজেন্টের অফিসিয়াল সাপোর্ট পেজ।",
          descriptionEn: "Official support documentation on utilizing the automated Google Flow Agent workflow tool."
        },
        {
          id: "spark",
          name: "Use Gemini Spark to manage tasks",
          bnName: "Gemini Spark",
          url: "https://support.google.com/gemini/answer/17094507",
          descriptionBn: "টাস্ক বা কাজ সুচারুভাবে পরিচালনার জন্য জেমিনি স্পার্ক টুলের অফিসিয়াল গাইড।",
          descriptionEn: "Learn how to orchestrate, plan and complete everyday tasks with Gemini Spark."
        },
        {
          id: "shopping",
          name: "Google Shopping AI",
          bnName: "Shopping AI",
          url: "https://blog.google/products/shopping/",
          descriptionBn: "এআই টেকনোলজির মাধ্যমে পার্সোনালাইজড অনলাইন শপিং ও পণ্যের তুলনা করার সুবিধা।",
          descriptionEn: "Google Shopping blog featuring new AI-powered item recommendation and visual search upgrades."
        }
      ]
    },
    {
      id: "developers",
      titleBn: "ডেভেলপার এবং কোডিং টুলস",
      titleEn: "Developer & Coding Tools",
      icon: Code,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50/50",
      borderColor: "border-emerald-100",
      products: [
        {
          id: "genkit",
          name: "Genkit - Open-source AI framework by Google",
          bnName: "Firebase Genkit",
          url: "https://genkit.dev/",
          descriptionBn: "ডেভেলপারদের জন্য উৎপাদনমুখী এআই অ্যাপ্লিকেশন ও মডেল দ্রুত ইন্টিগ্রেট করার ফ্রেমওয়ার্ক।",
          descriptionEn: "An open-source framework by Google to build, deploy, and monitor production-ready AI applications."
        },
        {
          id: "cli",
          name: "google-gemini/gemini-cli - GitHub",
          bnName: "Gemini CLI",
          url: "https://github.com/google-gemini/gemini-cli",
          descriptionBn: "টার্মিনাল বা কমান্ড লাইন ইন্টারফেস থেকে সরাসরি জেমিনি এপিআই অ্যাক্সেস করার অফিশিয়াল টুল।",
          descriptionEn: "Access Gemini directly from your command line with this official GitHub open-source CLI utility."
        },
        {
          id: "idx",
          name: "Firebase Studio",
          bnName: "Firebase Studio (Project IDX)",
          url: "https://firebase.studio/",
          descriptionBn: "ক্লাউড-ভিত্তিক ইন্টেলিজেন্ট কোডিং টুল ও আইডিই পরিবেশ (প্রজেক্ট আইডেক্স চালিত)।",
          descriptionEn: "Next-gen developer workstation by Google powered by Project IDX and Firebase integrations."
        },
        {
          id: "jules",
          name: "Build with Jules, your asynchronous coding agent",
          bnName: "Jules",
          url: "https://blog.google/innovation-and-ai/models-and-research/google-labs/jules/",
          descriptionBn: "জুলস (Jules): জটিল সফটওয়্যার পরিবর্তন ও স্বয়ংক্রিয় বাগ ফিক্স করতে সক্ষম কোডিং এজেন্ট।",
          descriptionEn: "Introducing Google's asynchronous AI coding agent designed to automate complex software refactoring."
        },
        {
          id: "coral",
          name: "Coral - Edge TPU",
          bnName: "Google Coral",
          url: "https://coral.ai/",
          descriptionBn: "লোকাল ডিভাইসে হাই-স্পিড মেশিন লার্নিং মডেল রান করার জন্য গুগলের ডেডিকেটেড হার্ডওয়্যার সলিউশন।",
          descriptionEn: "Hardware platform for local, high-speed neural network inference on smart hardware endpoints."
        },
        {
          id: "tensorflow",
          name: "TensorFlow Framework",
          bnName: "TensorFlow",
          url: "https://www.tensorflow.org/",
          descriptionBn: "ওপেন-সোর্স এন্ড-টু-এন্ড মেশিন লার্নিং প্ল্যাটফর্ম যা মডেল ট্রেনিং ও ডিপ্লয়মেন্ট সহজ করে।",
          descriptionEn: "Google's seminal open-source platform for training, optimizing, and deploying deep learning models."
        },
        {
          id: "jax",
          name: "JAX Library",
          bnName: "JAX",
          url: "https://jax.readthedocs.io/",
          descriptionBn: "হাই-পারফরম্যান্স গাণিতিক কম্পিউটেশন এবং গ্র্যাডিয়েন্ট নির্ণয় করার অত্যাধুনিক লাইব্রেরি।",
          descriptionEn: "Autograd and XLA compilation library for high-performance numerical computing and machine learning research."
        },
        {
          id: "keras",
          name: "Keras API",
          bnName: "Keras",
          url: "https://keras.io/",
          descriptionBn: "সহজ ও ডায়নামিক ডিপ লার্নিং এপিআই যা টেনসরফ্লো ট্রেইনিং সহজতর করে।",
          descriptionEn: "An elegant, high-level deep learning API built for rapid human experimentation."
        }
      ]
    },
    {
      id: "creative",
      titleBn: "ক্রিয়েটিভ এবং মাল্টিমোডাল টুলস",
      titleEn: "Creative & Multimodal Tools",
      icon: Palette,
      color: "text-purple-600",
      bgColor: "bg-purple-50/50",
      borderColor: "border-purple-100",
      products: [
        {
          id: "veo",
          name: "Veo - Google DeepMind",
          bnName: "Veo / Veo 2 / Veo 3",
          url: "https://deepmind.google/models/veo/",
          descriptionBn: "হাই-ডেফিনিশন সিনেমাটিক ভিডিও জেনারেশন ও এডিটিং প্রফেশনাল মডেল।",
          descriptionEn: "Cinematic, high-definition generative video model that gives creators unparalleled control."
        },
        {
          id: "lyria",
          name: "Lyria - Google DeepMind",
          bnName: "Lyria / Lyria 2 / Lyria 3 Pro",
          url: "https://deepmind.google/models/lyria/",
          descriptionBn: "উচ্চমানের মিউজিক, টিউন, ইন্সট্রুমেন্টাল ট্র্যাক ও অডিও জেনারেটর মডেল।",
          descriptionEn: "State-of-the-art music and audio generation model family built in collaboration with YouTube creative ecosystem."
        },
        {
          id: "imagefx",
          name: "ImageFX - AI Test Kitchen",
          bnName: "ImageFX",
          url: "https://aitestkitchen.withgoogle.com/tools/image-fx",
          descriptionBn: "ইমাজেন ৩ (Imagen 3) চালিত হাইপার-রিয়েলিস্টিক ছবি জেনারেটর টুল।",
          descriptionEn: "Fast and flexible AI image generation playground utilizing Google's latest Imagen rendering capability."
        },
        {
          id: "genie",
          name: "Genie - Google DeepMind",
          bnName: "Project Genie / Genie 3",
          url: "https://deepmind.google/models/genie/",
          descriptionBn: "ইন্টারেক্টিভ গেম ও ২ডি থ্রিডি ভার্চুয়াল ওয়ার্ল্ড জেনারেশন জেনারেটিভ মডেল।",
          descriptionEn: "Generative interactive environments model that converts images or sketches into playable video games."
        },
        {
          id: "magic-editor",
          name: "Magic Editor - Pixel Phone Help",
          bnName: "Magic Editor / Eraser / Photo Unblur",
          url: "https://support.google.com/pixelphone/answer/14210461",
          descriptionBn: "পিক্সেল ফোনের এআই চালিত বিশেষ ফটো এডিটিং ও ব্যাকগ্রাউন্ড সিলেকশন চমৎকার ইরেজার ফিচার।",
          descriptionEn: "Semantic photo editing suite that enables objects resizing, shifting, and lighting adjustments on Pixel."
        },
        {
          id: "pixel-studio",
          name: "Pixel Studio - Pixel Phone Help",
          bnName: "Pixel Studio",
          url: "https://support.google.com/pixelphone/answer/14226110",
          descriptionBn: "পিক্সেল ডিভাইসের এক্সক্লুসিভ ইমেজ ক্রিয়েশন আর ডিজাইন হাব প্লেগ্রাউন্ড।",
          descriptionEn: "Exclusive on-device creative canvas app for generating personalized illustrations, stickers and artwork."
        }
      ]
    },
    {
      id: "productivity",
      titleBn: "প্রোডাক্টিভিটি, ওয়ার্কস্পেস এবং ক্লাউড",
      titleEn: "Productivity, Workspace & Cloud",
      icon: Layers,
      color: "text-amber-600",
      bgColor: "bg-amber-50/50",
      borderColor: "border-amber-100",
      products: [
        {
          id: "workspace",
          name: "AI in Google Workspace",
          bnName: "Duet AI (Gemini for Workspace)",
          url: "https://workspace.google.com/solutions/ai/",
          descriptionBn: "গুগল ডকস, শিটস, জিমেইল ও স্লাইডে যুক্ত জেমিনি ইন্টেলিজেন্ট কো-রাইটার এবং অ্যাসিস্ট্যান্ট।",
          descriptionEn: "Leverage Gemini to draft emails, summarize documents, structure data tables, and design slides."
        },
        {
          id: "notebooklm",
          name: "NotebookLM",
          bnName: "NotebookLM Plus / Audio Overviews",
          url: "https://notebooklm.google/",
          descriptionBn: "ফাইলের ডকুমেন্ট বুঝে নিয়ে অটোমেটিক প্রশ্নোত্তর, সামারি ও ইন্টারঅ্যাক্টিভ অডিও পডকাস্ট ওভারভিউ মেকার।",
          descriptionEn: "Your personalized AI research assistant that learns your documents and generates interactive host audio overviews."
        }
      ]
    },
    {
      id: "scientific",
      titleBn: "সায়েন্টিফিক, স্পেশালাইজড, হেলথ এবং রোবোটিক্স",
      titleEn: "Scientific, Specialized, Health & Robotics",
      icon: FlaskConical,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50/50",
      borderColor: "border-cyan-100",
      products: [
        {
          id: "medpalm",
          name: "Med-PaLM - Google Research",
          bnName: "Med-PaLM / Med-PaLM 2",
          url: "https://sites.research.google/med-palm/",
          descriptionBn: "চিকিৎসা বিজ্ঞান ও ক্লিনিকাল কোয়েরির নির্ভরযোগ্য উত্তর প্রদানের জন্য স্পেশালাইজড এআই মডেল।",
          descriptionEn: "Large language models designed to provide high-quality, clinically accurate answers to medical research inquiries."
        },
        {
          id: "medgemini",
          name: "Advancing medical AI with Med-Gemini",
          bnName: "MedGemma / SignGemma",
          url: "https://research.google/blog/advancing-medical-ai-with-med-gemini/",
          descriptionBn: "মাল্টিমোডাল মেডিকেল ইনপুট বিশ্লেষণ এবং সাইন ল্যাঙ্গুয়েজ বোঝার বিশেষ এআই প্রজেক্ট।",
          descriptionEn: "Highly capable multimodal systems fine-tuned for medical reasoning, signs reading, and diagnostics."
        },
        {
          id: "alphamissense",
          name: "AlphaMissense - Google DeepMind",
          bnName: "AlphaMissense",
          url: "https://deepmind.google/science/alphamissense/",
          descriptionBn: "ডিএনএ বা জিনগত পরিবর্তনের ক্ষতিকর প্রভাব ও আণবিক ত্রুটির আশঙ্কা নির্ণয়ের বৈজ্ঞানিক মডেল।",
          descriptionEn: "Scientific model mapping structural missense variants to predict generic disease associations in genetics."
        },
        {
          id: "alphacode",
          name: "Competitive programming with AlphaCode",
          bnName: "AlphaCode",
          url: "https://deepmind.google/blog/competitive-programming-with-alphacode/",
          descriptionBn: "ক্যালকুলাস ও জটিল এলগরিদম ব্যবহারের মাধ্যমে প্রতিযোগিতামূলক প্রোগ্রামিং সমাধানে সক্ষম মডেল।",
          descriptionEn: "AI code generation system designed to write autonomous solutions to highly competitive programming tasks."
        },
        {
          id: "alphatensor",
          name: "Discovering novel algorithms with AlphaTensor",
          bnName: "AlphaTensor / AlphaDev",
          url: "https://deepmind.google/blog/discovering-novel-algorithms-with-alphatensor/",
          descriptionBn: "গণিত ও সি++ সর্টিং এলগরিদম অপ্টিমাইজেশনের মাধ্যমে কম্পিউটিং গতি বাড়ানোর ডিপমাইন্ড প্রজেক্ট।",
          descriptionEn: "RL-based models uncovering mathematically optimal, faster assembly codes and matrix multiplications."
        },
        {
          id: "gnome",
          name: "GNoME - Google DeepMind",
          bnName: "GNoME",
          url: "https://deepmind.google/science/gnome/",
          descriptionBn: "২.২ মিলিয়ন নতুন স্ফটিক বা ক্রিস্টাল গ্রিড আবিষ্কারে সক্ষম আর্টিফিশিয়াল ম্যাটেরিয়াল সায়েন্স ডিজাইন টুল।",
          descriptionEn: "Deep learning model predicting stability in novel crystal lattice formations to accelerate advanced hardware engineering."
        },
        {
          id: "graphcast",
          name: "GraphCast - Google DeepMind",
          bnName: "GraphCast / NeuralGCM / GenCast",
          url: "https://deepmind.google/science/graphcast/",
          descriptionBn: "আবহাওয়া পূর্বাভাসে শতভাগ নিখুঁত ট্র্যাকিং ও দ্রুততম থ্রিডি নোটিফিকেশন সিস্টেম।",
          descriptionEn: "Global weather forecasting model predicting extreme meteorology with unprecedented accuracy within minutes."
        },
        {
          id: "rt2",
          name: "RT-2: Vision-Language-Action Models",
          bnName: "RT-1 / RT-2 / RT-X",
          url: "https://robotics-transformer2.github.io/",
          descriptionBn: "ভিজ্যুয়াল ইনপুট ও ভাষা সরাসরি রোবটিক অ্যান্ড-অ্যাক্টরে অ্যাকশন সিগন্যালে রূপান্তরের চমৎকার সিস্টেম।",
          descriptionEn: "Visual-Language-Action (VLA) models translating camera stream directly into robotic motor movements."
        },
        {
          id: "palm2",
          name: "PaLM 2 - Google AI",
          bnName: "PaLM / PaLM 2",
          url: "https://ai.google/discover/palm-2/",
          descriptionBn: "গুগলের পূর্ববর্তী মাল্টিলিঙ্গুয়াল ও রিজনিং লার্জ ল্যাঙ্গুয়েজ মডেল টেকনোলজি ফ্যামিলি।",
          descriptionEn: "Google's classic lightweight multi-lingual LLM backing Google translation and enterprise solutions."
        }
      ]
    },
    {
      id: "safety",
      titleBn: "এআই সেফটি এবং ট্রাস্ট",
      titleEn: "AI Safety & Trust",
      icon: ShieldCheck,
      color: "text-rose-600",
      bgColor: "bg-rose-50/50",
      borderColor: "border-rose-100",
      products: [
        {
          id: "synthid",
          name: "SynthID - Google DeepMind",
          bnName: "SynthID",
          url: "https://deepmind.google/technologies/synthid/",
          descriptionBn: "এআই দ্বারা জেনারেট করা ছবি, অডিও ও টেক্সটের অদৃশ্য অনন্য ওয়াটারমার্কিং এবং সত্যতা যাচাই টুল।",
          descriptionEn: "Tool for watermarking and identifying AI-generated content (images, audio, and text) without degrading quality."
        },
        {
          id: "safetypage",
          name: "Safety - Google DeepMind",
          bnName: "DeepMind Safety Research",
          url: "https://deepmind.google/safety/",
          descriptionBn: "সার্বিক এআই ঝুঁকি নিরসন ও নৈতিকভাবে নিরাপদ মডেল তৈরির ডিপমাইন্ড রিসার্চ উইং।",
          descriptionEn: "Exploration of ethical and safety-aligned boundaries for developing highly unified frontier AI models."
        }
      ]
    }
  ];

  // Search filter
  const filteredCategories = useMemo(() => {
    return categories
      .map(category => {
        const filteredProducts = category.products.filter(product => {
          const matchSearch = 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (product.bnName && product.bnName.toLowerCase().includes(searchTerm.toLowerCase())) ||
            product.descriptionEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.descriptionBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.url.toLowerCase().includes(searchTerm.toLowerCase());
          return matchSearch;
        });

        return {
          ...category,
          products: filteredProducts
        };
      })
      .filter(category => category.products.length > 0);
  }, [searchTerm]);

  const totalResults = useMemo(() => {
    return filteredCategories.reduce((sum, cat) => sum + cat.products.length, 0);
  }, [filteredCategories]);

  const categoryThemeMap: Record<string, { num: string; color: string; border: string; hoverBorder: string; hoverText: string; bg: string; textClass: string }> = {
    general: {
      num: "01",
      color: "#4285F4",
      border: "border-[#4285F4]/30",
      hoverBorder: "hover:border-[#4285F4]/60",
      hoverText: "group-hover:text-[#4285F4]",
      bg: "bg-[#4285F4]/10",
      textClass: "text-[#4285F4]"
    },
    developers: {
      num: "02",
      color: "#34A853",
      border: "border-[#34A853]/30",
      hoverBorder: "hover:border-[#34A853]/60",
      hoverText: "group-hover:text-[#34A853]",
      bg: "bg-[#34A853]/10",
      textClass: "text-[#34A853]"
    },
    creative: {
      num: "03",
      color: "#EA4335",
      border: "border-[#EA4335]/30",
      hoverBorder: "hover:border-[#EA4335]/60",
      hoverText: "group-hover:text-[#EA4335]",
      bg: "bg-[#EA4335]/10",
      textClass: "text-[#EA4335]"
    },
    productivity: {
      num: "04",
      color: "#FBBC04",
      border: "border-[#FBBC04]/30",
      hoverBorder: "hover:border-[#FBBC04]/60",
      hoverText: "group-hover:text-[#FBBC04]",
      bg: "bg-[#FBBC04]/10",
      textClass: "text-[#FBBC04]"
    },
    scientific: {
      num: "05",
      color: "#C084FC",
      border: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400/60",
      hoverText: "group-hover:text-purple-400",
      bg: "bg-purple-500/10",
      textClass: "text-purple-400"
    },
    safety: {
      num: "06",
      color: "#9CA3AF",
      border: "border-gray-500/30",
      hoverBorder: "hover:border-gray-400/60",
      hoverText: "group-hover:text-gray-300",
      bg: "bg-gray-500/10",
      textClass: "text-gray-400"
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F5F5F5] font-sans selection:bg-blue-600 selection:text-white pb-20 relative overflow-x-hidden">
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-35 z-0 h-[600px]" />

      <div className="max-w-6xl mx-auto px-4 pt-16 relative z-10">
        
        {/* Header Section */}
        <header className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-baseline border-b-4 border-white pb-6 gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#4285F4] mb-1 font-mono">Resource Directory</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none italic text-white select-none">
              Google AI
            </h1>
            <p className="text-lg md:text-xl font-bold uppercase tracking-wide text-[#F5F5F5]/60 mt-1.5 font-mono">
              INDEX-BGR // গুগল এআই নির্দেশিকা
            </p>
          </div>
          <div className="text-left md:text-right">
            <div className="text-sm font-bold bg-white text-black px-3.5 py-1.5 uppercase tracking-tighter mb-2 inline-block">
              Official Links Only
            </div>
            <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">
              Updated 2026 // BOLD INDEX-001
            </div>
          </div>
        </header>

        {/* Global Statistics & Actions */}
        <div className="bg-[#161616] border-2 border-white/10 p-5 md:p-6 mb-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-2xl">
          
          {/* Real-time search bar */}
          <div className="relative flex-1 group">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-white transition-colors" />
            </span>
            <input
              id="search-input"
              type="text"
              placeholder="যেকোনো নাম, বিবরণ বা লিংক খুজুন... (Search products...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-11 pr-10 py-3 text-sm bg-[#1e1e1e] border-2 border-white/15 focus:bg-[#252525] focus:outline-none focus:border-[#4285F4] text-white transition-all placeholder-zinc-500 font-mono"
            />
            {searchTerm && (
              <button 
                id="search-clear-button"
                onClick={() => setSearchTerm("")}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-zinc-500 hover:text-white cursor-pointer"
                title="সার্চ ক্লিয়ার করুন"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Quick Filter buttons or matches counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold bg-[#1d1d1d] text-slate-300 px-3.5 py-2.5 border-2 border-white/10">
              {totalResults} {totalResults === 1 ? 'PRODUCT FOUND' : 'PRODUCTS LISTED'}
            </span>
            
            {/* Quick clean button if filtered */}
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm("")}
                className="text-xs font-semibold uppercase tracking-wider px-3.5 py-2.5 bg-red-600/20 text-red-400 border-2 border-red-500/30 hover:bg-red-600/30 transition-colors cursor-pointer flex items-center gap-1"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>

        {/* Categories Quick Links Nav */}
        {filteredCategories.length > 0 && !searchTerm && (
          <div className="mb-12">
            <p className="text-xs font-mono font-bold text-slate-400/90 uppercase tracking-widest mb-3.5">
              ক্যাটাগরি কুইক জ্যাপ
            </p>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => {
                const IconComp = cat.icon;
                const theme = categoryThemeMap[cat.id] || { num: "00", color: "#FFFFFF" };
                return (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase text-slate-300 bg-[#161616] border-2 border-white/10 hover:border-white hover:text-white transition-all shadow-md active:bg-white active:text-black"
                  >
                    <span className="font-mono text-[10px] text-zinc-500">{theme.num}</span>
                    <IconComp className="w-3.5 h-3.5" style={{ color: theme.color }} />
                    <span>{cat.titleBn}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        <AnimatePresence mode="popLayout">
          {filteredCategories.length > 0 ? (
            <div className="space-y-16">
              {filteredCategories.map((cat) => {
                const CategoryIcon = cat.icon;
                const theme = categoryThemeMap[cat.id] || { num: "XX", color: "#4285F4", hoverText: "" };
                return (
                  <motion.section 
                    key={cat.id}
                    id={cat.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="scroll-mt-8"
                  >
                    {/* Category Title Header */}
                    <div className="flex items-center justify-between border-b-2 border-white/30 pb-4 mb-8">
                      <div className="flex items-baseline gap-4">
                        <span className="text-3xl font-black italic tracking-tighter font-mono select-none" style={{ color: theme.color }}>
                          {theme.num}
                        </span>
                        <div>
                          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white flex items-center gap-2 mb-0.5">
                            <CategoryIcon className="w-5 h-5 opacity-70 inline" style={{ color: theme.color }} />
                            {cat.titleBn}
                          </h2>
                          <p className="text-xs font-mono font-bold text-slate-400/90 tracking-widest uppercase">
                            {cat.titleEn}
                          </p>
                        </div>
                      </div>
                      
                      {/* Counter indicator */}
                      <span className="text-xs font-mono font-bold text-slate-300 bg-[#161616] border-2 border-white/10 px-3 py-1">
                        {cat.products.length} {cat.products.length === 1 ? 'UNIT' : 'UNITS'}
                      </span>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {cat.products.map((product) => (
                        <div 
                          key={product.id}
                          id={`product-card-${product.id}`}
                          className="bg-[#161616] border-2 border-white/10 p-5 hover:border-white/30 transition-all duration-200 flex flex-col justify-between group relative hover:-translate-y-0.5"
                          style={{ borderLeftColor: theme.color, borderLeftWidth: "4px" }}
                        >
                          {/* Inner Decorative Accent and Anchor */}
                          <div className="space-y-4">
                            <div className="flex items-start justify-between gap-2">
                              {/* Clicking the name acts as the link directly as requested */}
                              <a 
                                href={product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-black text-white text-base leading-snug tracking-tight inline-flex items-center gap-1.5 focus:outline-none"
                                title="লিংকে প্রবেশ করতে ক্লিক করুন"
                              >
                                <span className={`hover:underline hover:decoration-white decoration-2 underline-offset-4 ${theme.hoverText} transition-colors`}>
                                  {product.name}
                                </span>
                              </a>
                              
                              <a 
                                href={product.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-zinc-500 hover:text-white transition-colors p-1 flex-shrink-0"
                                title="নতুন ট্যাবে খুলুন"
                              >
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                            </div>

                            {/* Bengali subtitle (Missing product reference query) */}
                            {product.bnName && product.bnName !== product.name && (
                              <div className="flex items-center gap-1.5">
                                <span className="text-[9px] font-mono font-bold uppercase px-1.5 py-0.5 bg-zinc-800 text-zinc-300 tracking-wider">
                                  REF
                                </span>
                                <span className="text-xs font-semibold text-slate-300">
                                  {product.bnName}
                                </span>
                              </div>
                            )}

                            {/* Descriptions */}
                            <div className="space-y-2 pt-2 border-t border-white/5">
                              <p className="text-xs text-slate-350 leading-relaxed font-normal">
                                <span className="font-bold mr-1" style={{ color: theme.color }}>[BN]</span>
                                {product.descriptionBn}
                              </p>
                              <p className="text-[11px] text-zinc-450 leading-normal italic font-normal">
                                <span className="text-zinc-500 font-bold not-italic mr-1 font-mono">[EN]</span>
                                {product.descriptionEn}
                              </p>
                            </div>
                          </div>

                          {/* Beautiful card footer */}
                          <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                            <span className="font-mono text-[9px] uppercase tracking-wider overflow-hidden text-ellipsis whitespace-nowrap max-w-[170px]" title={new URL(product.url).hostname}>
                              {new URL(product.url).hostname}
                            </span>
                            <a 
                              href={product.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-slate-400 group-hover:text-white transition-colors font-bold font-mono text-[10px]"
                            >
                              LINK
                              <ExternalLink className="w-3 h-3 text-slate-500" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                );
              })}
            </div>
          ) : (
            /* Empty State for Search Filter */
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 px-4 bg-[#161616] border-2 border-white/10"
            >
              <div className="w-12 h-12 bg-white/5 border border-white/15 flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-1 uppercase tracking-wider font-mono">
                কোনো ম্যাচ পাওয়া যায়নি (No matches found)
              </h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto mb-6">
                "{searchTerm}"-এর সাথে মিলে যায় এমন কোনো এআই প্রোডাক্ট খুঁজে পাওয়া যায়নি।
              </p>
              <button 
                onClick={() => setSearchTerm("")}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-slate-200 transition-colors cursor-pointer"
              >
                সার্চ রিসেট করুন (Reset search)
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer info block */}
        <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} GOOGLE DEEPMIND / GOOGLE RESEARCH / GOOGLE CLOUD</p>
          <p className="tracking-[0.5em] select-none">00110101 00101010 11100011</p>
        </footer>

      </div>
    </div>
  );
}

