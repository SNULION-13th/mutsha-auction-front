import { Cup, File } from "@/assets/image";
import { Button } from "@/components/Button";
import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  onSubmit?: (payload: {
    title: string;
    description: string;
    image: File;
    startPriceCup: number;
    duration: { d: number; h: number; m: number };
  }) => void | Promise<void>;
};

function digitsOnly(v: string) {
  return v.replace(/\D+/g, "");
}

function clampNum(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function AuctionCreatePage({ onSubmit }: Props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [startPrice, setStartPrice] = useState<string>("00");
  const [d, setD] = useState<string>("10");
  const [h, setH] = useState<string>("00");
  const [m, setM] = useState<string>("00");

  const [tTitle, setTTitle] = useState(false);
  const [tDesc, setTDesc] = useState(false);
  const [tImage, setTImage] = useState(false);

  const [preview, setPreview] = useState<string | null>(null);
  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(image);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const onPick = () => inputRef.current?.click();
  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    setImage(file);
  };

  const valid = {
    title: title.trim().length > 0,
    desc: desc.trim().length > 0,
    image: image !== null,
  };
  const isAllValid = valid.title && valid.desc && valid.image;

  const startPriceNumber = useMemo(
    () => Number(digitsOnly(startPrice || "0")),
    [startPrice],
  );

  useEffect(() => {
    if (h === "") return;
    const num = clampNum(Number(digitsOnly(h)), 0, 23);
    if (String(num) !== h) setH(String(num).padStart(2, "0"));
  }, [h]);
  useEffect(() => {
    if (m === "") return;
    const num = clampNum(Number(digitsOnly(m)), 0, 59);
    if (String(num) !== m) setM(String(num).padStart(2, "0"));
  }, [m]);

  const handleSubmit = async () => {
    setTTitle(true);
    setTDesc(true);
    setTImage(true);
    if (!isAllValid || !image) return;

    await onSubmit?.({
      title: title.trim(),
      description: desc.trim(),
      image,
      startPriceCup: startPriceNumber,
      duration: {
        d: Number(digitsOnly(d || "0")),
        h: Number(digitsOnly(h || "0")),
        m: Number(digitsOnly(m || "0")),
      },
    });
  };

  return (
    <div className="w-full px-50 py-30">
      <div className="max-w-[973px] mx-auto flex flex-col gap-25">
        <div className="flex flex-col gap-5">
          <div className="text-5xl font-bold text-scale-600">경매 등록하기</div>
          <div className="text-2xl text-scale-400">
            당신의 애착템, 술잔으로 걸어보세요!
          </div>
        </div>
        <div className="w-full rounded-2xl bg-bg-white flex flex-col gap-25 shadow-xl px-35 py-22.5">
          <div className="grid grid-cols-1 gap-12">
            <div className="flex flex-col gap-2">
              <label className="text-lg font-bold text-scale-600">상품명</label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setTTitle(true)}
                placeholder="예: 빈티지 가죽 자켓"
                className="w-full h-14 rounded-md border border-scale-200 focus:border-brand-primary outline-none px-4 text-base text-scale-500 placeholder:text-scale-300"
              />
              {!valid.title && tTitle && (
                <p className="text-point-warning text-base mt-1">
                  *상품명을 입력해주세요.
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-bold text-scale-600">
                상품 설명
              </label>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                onBlur={() => setTDesc(true)}
                placeholder="상품의 상태, 사용 이력, 특징 등을 작성해주세요."
                className="w-full min-h-36 rounded-md border border-scale-200 focus:border-brand-primary outline-none p-4 text-base text-scale-500 placeholder:text-scale-300"
              />
              {!valid.desc && tDesc && (
                <p className="text-point-warning text-base mt-1">
                  *상품 설명을 입력해주세요.
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-lg font-bold text-scale-600">사진</label>
              <div
                onClick={() => {
                  setTImage(true);
                  onPick();
                }}
                className={`w-full h-[320px] rounded-md border ${
                  preview ? "border-transparent" : "border-scale-200"
                } overflow-hidden cursor-pointer flex items-center justify-center`}
                title={preview ? "클릭하여 다른 사진으로 변경" : "클릭"}
              >
                {!preview ? (
                  <div className="flex flex-col items-center gap-4 text-scale-300">
                    <img src={File} className="w-16 opacity-60" />
                    <div className="text-base">클릭하여 업로드</div>
                  </div>
                ) : (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-full h-full object-cover"
                  />
                )}
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFile(f);
                  }}
                />
              </div>
              {!valid.image && tImage && (
                <p className="text-point-warning text-base mt-1">
                  *사진을 등록해주세요.
                </p>
              )}
            </div>

            <div className="w-full flex gap-38">
              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold text-scale-600">
                  시작가
                </label>
                <div className="flex items-center gap-6">
                  <img src={Cup} className="w-10" />
                  <input
                    inputMode="numeric"
                    value={startPrice}
                    onChange={(e) => setStartPrice(digitsOnly(e.target.value))}
                    className="w-24 text-3xl font-bold text-brand-primary bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
                  />
                  <span className="text-3xl font-bold text-scale-500">잔</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-lg font-bold text-scale-600">
                  경매 기간
                </label>
                <div className="flex items-center gap-5 text-scale-500">
                  <div className="flex items-center gap-2">
                    <input
                      inputMode="numeric"
                      value={d}
                      onChange={(e) => setD(digitsOnly(e.target.value))}
                      className="w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
                    />
                    <span className="text-3xl pb-1">d</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      inputMode="numeric"
                      value={h}
                      onChange={(e) => setH(digitsOnly(e.target.value))}
                      className="w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
                    />
                    <span className="text-3xl pb-1">h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      inputMode="numeric"
                      value={m}
                      onChange={(e) => setM(digitsOnly(e.target.value))}
                      className="w-16 text-3xl font-bold bg-transparent border-b-2 border-scale-300 focus:border-brand-primary outline-none text-center"
                    />
                    <span className="text-3xl pb-1">m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Button
              variant={isAllValid ? "primary" : "disabled"}
              disabled={!isAllValid}
              onClick={handleSubmit}
              className="w-80 h-14"
            >
              상품 등록하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionCreatePage;
