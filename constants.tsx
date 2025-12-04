import { 
  ClipboardList, 
  HardHat, 
  Settings, 
  Signal, 
  TrendingUp, 
  Wrench,
  Wifi
} from 'lucide-react';
import { Stage } from './types';

export const LEARNING_STAGES: Stage[] = [
  {
    id: 1,
    title: "Perencanaan & Analisis",
    shortDescription: "Fondasi awal menentukan kebutuhan dan desain jaringan.",
    fullDescription: "Tahap ini adalah langkah krusial sebelum peletakan batu pertama. Kegiatan utama meliputi survei lokasi (site survey) untuk menentukan titik koordinat yang optimal, analisis demografi pengguna, dan desain topologi jaringan. Output dari tahap ini adalah Blueprint teknis dan Bill of Materials (BoM).",
    icon: ClipboardList
  },
  {
    id: 2,
    title: "Pembangunan Fisik",
    shortDescription: "Eksekusi konstruksi menara dan infrastruktur pasif.",
    fullDescription: "Melibatkan pekerjaan sipil berat dan mekanikal elektrikal. Termasuk di dalamnya adalah penggalian pondasi, pendirian menara (Tower Erection), pemasangan shelter perangkat, serta penarikan kabel fiber optik (backbone) maupun kabel power. Keselamatan kerja (K3) sangat diutamakan di sini.",
    icon: HardHat
  },
  {
    id: 3,
    title: "Konfigurasi & NFC",
    shortDescription: "Instalasi perangkat aktif dan integrasi sistem.",
    fullDescription: "Pemasangan perangkat aktif seperti BTS (Base Transceiver Station), Router, dan Microwave. Tahap ini mencakup konfigurasi alamat IP, routing protocol, dan parameter frekuensi. Teknologi NFC (Near Field Communication) sering digunakan untuk tagging aset dan memudahkan teknisi dalam pairing perangkat maintenance di lapangan.",
    icon: Wifi
  },
  {
    id: 4,
    title: "Pengujian Jaringan",
    shortDescription: "Validasi performa sinyal dan throughput.",
    fullDescription: "Sebelum jaringan 'On-Air', serangkaian tes ketat dilakukan. Ini meliputi Drive Test untuk mengukur cakupan sinyal (coverage), uji throughput (kecepatan internet), latency test, dan stress test untuk memastikan perangkat tidak overheat saat beban trafik tinggi.",
    icon: Signal
  },
  {
    id: 5,
    title: "Evaluasi & Optimasi",
    shortDescription: "Penyempurnaan parameter untuk kualitas maksimal.",
    fullDescription: "Data dari pengujian dianalisis. Jika ditemukan blank spot atau interferensi sinyal, dilakukan penyesuaian (tuning). Ini bisa berupa penyesuaian kemiringan antena (tilt), penambahan daya pancar, atau re-konfigurasi frekuensi agar kualitas layanan (QoS) memenuhi standar.",
    icon: TrendingUp
  },
  {
    id: 6,
    title: "Pemeliharaan",
    shortDescription: "Menjaga keberlangsungan layanan jangka panjang.",
    fullDescription: "Infrastruktur telekomunikasi hidup 24/7. Pemeliharaan mencakup monitoring berkala via NOC (Network Operation Center), pembersihan perangkat fisik, pengecekan baterai cadangan, dan update firmware untuk menutup celah keamanan.",
    icon: Wrench
  }
];