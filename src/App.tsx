

function App() {

  return (
    <div className="min-h-screen text-zinc-900 p-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-white w-[1100px] mx-auto rounded-xl min-h-[700px] shadow-md border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-400" />
          </div>
        </aside>
        <main className='p-4'>
          <div className="max-w-[700px] mx-auto pt-16 prose">
            <div className="container mx-auto p-8">
              <h1 >Explorando Tailwind CSS</h1>

              <p >Tailwind CSS é uma biblioteca de utilidades CSS de baixo nível que oferece uma maneira altamente eficiente de construir interfaces do usuário. Ao contrário de outros frameworks, o Tailwind não possui componentes pré-construídos; em vez disso, ele fornece classNamees utilitárias para ajudar a criar designs exclusivos e personalizados.</p>

              <h2 >Utilizando classNamees do Tailwind</h2>

              <p >Para começar, basta adicionar as classNamees diretamente em seus elementos HTML. Aqui está um exemplo de um botão estilizado:</p>

              <div >
                <h3 >Botão Estilizado</h3>
                <pre><code>&lt;button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"&gt;
                  Clique Aqui
                  &lt;/button&gt;</code></pre>
              </div>

              <p >No exemplo acima, as classNamees como `bg-blue-500`, `hover:bg-blue-700`, e `text-white` são fornecidas pelo Tailwind e aplicam estilos ao botão.</p>

              <h2 >Layout Responsivo</h2>

              <p >Tailwind CSS facilita a criação de layouts responsivos com suas classNamees dedicadas. Aqui está um exemplo de um layout simples:</p>

              <div >
                <h3 >Layout Responsivo</h3>
                <pre><code>&lt;div class="md:flex"&gt;
                  &lt;div class="md:w-1/2"&gt;
                  &lt;p class="mb-4"&gt;Este é um layout responsivo usando as classes `md:flex` e `md:w-1/2`.&lt;/p&gt;
                  &lt;/div&gt;
                  &lt;div class="md:w-1/2"&gt;
                  &lt;img src="imagem.jpg" alt="Imagem de Exemplo" class="w-full h-auto"&gt;
                  &lt;/div&gt;
                  &lt;/div&gt;</code>
                </pre>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
