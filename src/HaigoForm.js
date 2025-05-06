import { useState } from "react";

export default function HaigoForm() {
  const [mainIngredients, setMainIngredients] = useState(Array(8).fill({ name: "", amount: "", note: "" }));
  const [subIngredients, setSubIngredients] = useState(Array(3).fill({ name: "", amount: "", note: "" }));
  const [additives, setAdditives] = useState(Array(3).fill({ name: "", amount: "", note: "" }));
  const [hydrationRate, setHydrationRate] = useState(30);
  const [baume, setBaume] = useState(8);

  const totalFlour = mainIngredients.reduce((sum, ing) => sum + Number(ing.amount || 0), 0);
  const saltWaterWeight = totalFlour * (hydrationRate / 100);
  const saltWeight = (baume / (100 + baume)) * saltWaterWeight;

  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto">
      <div className="mb-4 grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          製品名
          <input type="text" className="border p-2" placeholder="例：うどん" />
        </label>
        <label className="flex flex-col">
          製造日
          <input type="date" className="border p-2" />
        </label>
      </div>

      <h1 className="text-2xl font-bold">配合表入力UI（プロトタイプ）</h1>

      <section>
        <h2 className="text-xl font-semibold">主原料（8行）</h2>
        {mainIngredients.map((ing, i) => (
          <div key={i} className="grid grid-cols-3 gap-2">
            <input className="border p-2" placeholder="原料名" value={ing.name} onChange={e => {
              const copy = [...mainIngredients]; copy[i].name = e.target.value; setMainIngredients(copy);
            }} />
            <input type="number" className="border p-2" placeholder="量 (kg)" value={ing.amount} onChange={e => {
              const copy = [...mainIngredients]; copy[i].amount = e.target.value; setMainIngredients(copy);
            }} />
            <input className="border p-2" placeholder="備考" value={ing.note} onChange={e => {
              const copy = [...mainIngredients]; copy[i].note = e.target.value; setMainIngredients(copy);
            }} />
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold">副原料（3行）</h2>
        {subIngredients.map((ing, i) => (
          <div key={i} className="grid grid-cols-3 gap-2">
            <input className="border p-2" placeholder="原料名" value={ing.name} onChange={e => {
              const copy = [...subIngredients]; copy[i].name = e.target.value; setSubIngredients(copy);
            }} />
            <input type="number" className="border p-2" placeholder="量 (kg)" value={ing.amount} onChange={e => {
              const copy = [...subIngredients]; copy[i].amount = e.target.value; setSubIngredients(copy);
            }} />
            <input className="border p-2" placeholder="備考" value={ing.note} onChange={e => {
              const copy = [...subIngredients]; copy[i].note = e.target.value; setSubIngredients(copy);
            }} />
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold">添加物（3行）</h2>
        {additives.map((ing, i) => (
          <div key={i} className="grid grid-cols-3 gap-2">
            <input className="border p-2" placeholder="名称" value={ing.name} onChange={e => {
              const copy = [...additives]; copy[i].name = e.target.value; setAdditives(copy);
            }} />
            <input type="number" className="border p-2" placeholder="量 (kg)" value={ing.amount} onChange={e => {
              const copy = [...additives]; copy[i].amount = e.target.value; setAdditives(copy);
            }} />
            <input className="border p-2" placeholder="備考" value={ing.note} onChange={e => {
              const copy = [...additives]; copy[i].note = e.target.value; setAdditives(copy);
            }} />
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-semibold">食塩水計算</h2>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex flex-col">
            加水率（％）
            <input type="number" className="border p-2" value={hydrationRate} onChange={e => setHydrationRate(Number(e.target.value))} />
          </label>
          <label className="flex flex-col">
            ボーメ度
            <input type="number" className="border p-2" value={baume} onChange={e => setBaume(Number(e.target.value))} />
          </label>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4 bg-gray-100 rounded p-4">
          <div><p>加水重量: <strong>{(saltWaterWeight).toFixed(3)}</strong> kg</p></div>
          <div><p>加水容量: <strong>{(saltWaterWeight / 1.044).toFixed(3)}</strong> L</p></div>
          <div><p>食塩重量: <strong>{(saltWeight).toFixed(3)}</strong> kg</p></div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">備考</h2>
        <textarea className="border p-2 w-full h-32" placeholder="コメントを入力してください（改行可）"></textarea>
      </section>
    </div>
  );
}
