import React from "react";
import PropTypes from "prop-types";

const Music = (props) => {
  return (
    <>
      <div className="flex flex-col pb-20 max-md:max-w-full">
        <div className="text-clamp-20 font-medium text-white max-md:max-w-full">
          for Cloudy Days
        </div>
        <div className="mt-8 mb-16 max-md:mb-10 max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900 bg-opacity-40 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/23a612ac9be9414662d74031f65785f2bd5d5cdad28bb9099e0b7d9aa4c9b2d2?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="self-center aspect-square w-[140px]"
                />
                <div className="flex flex-col mt-3">
                  <div className="font-bold text-ellipsis">Gloom Grooves</div>
                  <div className="mt-1 font-medium whitespace-normal text-wrap text-ellipsis">
                    Mellow tunes for gray skies.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900 bg-opacity-40 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/27e96fb93bbbb7e3cbdc7330eed1f47d0e193c17154766cbf22e81f0162d1f62?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/27e96fb93bbbb7e3cbdc7330eed1f47d0e193c17154766cbf22e81f0162d1f62?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27e96fb93bbbb7e3cbdc7330eed1f47d0e193c17154766cbf22e81f0162d1f62?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/27e96fb93bbbb7e3cbdc7330eed1f47d0e193c17154766cbf22e81f0162d1f62?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/27e96fb93bbbb7e3cbdc7330eed1f47d0e193c17154766cbf22e81f0162d1f62?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/27e96fb93bbbb7e3cbdc7330eed1f47d0e193c17154766cbf22e81f0162d1f62?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/27e96fb93bbbb7e3cbdc7330eed1f47d0e193c17154766cbf22e81f0162d1f62?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/27e96fb93bbbb7e3cbdc7330eed1f47d0e193c17154766cbf22e81f0162d1f62?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="self-center aspect-square w-[140px]"
                />
                <div className="flex flex-col mt-3">
                  <div className="font-bold text-ellipsis">Hazy Horizons</div>
                  <div className="mt-1 font-medium whitespace-normal text-wrap text-ellipsis">
                    Dreamy melodies for misty views.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900 bg-opacity-40 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b04f4b0bb1e8c2f42b0b3188c4376f68b2d023d2021e55c82552a2e830cd9a04?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b04f4b0bb1e8c2f42b0b3188c4376f68b2d023d2021e55c82552a2e830cd9a04?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b04f4b0bb1e8c2f42b0b3188c4376f68b2d023d2021e55c82552a2e830cd9a04?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b04f4b0bb1e8c2f42b0b3188c4376f68b2d023d2021e55c82552a2e830cd9a04?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b04f4b0bb1e8c2f42b0b3188c4376f68b2d023d2021e55c82552a2e830cd9a04?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b04f4b0bb1e8c2f42b0b3188c4376f68b2d023d2021e55c82552a2e830cd9a04?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b04f4b0bb1e8c2f42b0b3188c4376f68b2d023d2021e55c82552a2e830cd9a04?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b04f4b0bb1e8c2f42b0b3188c4376f68b2d023d2021e55c82552a2e830cd9a04?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="self-center aspect-square w-[140px]"
                />
                <div className="flex flex-col mt-3">
                  <div className="font-bold text-ellipsis">Fog Harmonies</div>
                  <div className="mt-1 font-medium whitespace-normal text-wrap text-ellipsis">
                    Soft music in foggy weather.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-2.5 pt-2.5 pb-3 w-full text-xs text-white rounded-lg bg-zinc-900 bg-opacity-40 max-md:mt-6">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0261a8618b4e011d5a93f9b5213eb0372feba4ee8fe25a4c416acbfacdcd857e?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0261a8618b4e011d5a93f9b5213eb0372feba4ee8fe25a4c416acbfacdcd857e?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0261a8618b4e011d5a93f9b5213eb0372feba4ee8fe25a4c416acbfacdcd857e?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0261a8618b4e011d5a93f9b5213eb0372feba4ee8fe25a4c416acbfacdcd857e?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0261a8618b4e011d5a93f9b5213eb0372feba4ee8fe25a4c416acbfacdcd857e?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0261a8618b4e011d5a93f9b5213eb0372feba4ee8fe25a4c416acbfacdcd857e?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0261a8618b4e011d5a93f9b5213eb0372feba4ee8fe25a4c416acbfacdcd857e?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0261a8618b4e011d5a93f9b5213eb0372feba4ee8fe25a4c416acbfacdcd857e?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
                  className="self-center aspect-square w-[140px]"
                />
                <div className="flex flex-col mt-3">
                  <div className="font-bold text-ellipsis">
                    Chords of the Clouds
                  </div>
                  <div className="mt-1 font-medium whitespace-normal text-wrap text-ellipsis">
                    Music soaring like clouds.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between text-sm text-white max-md:max-w-full">
        <div className="flex flex-col px-6 max-md:px-5 max-md:max-w-full">
          <div className="text-2xl font-medium text-white">Hazy Horizons</div>
          <div className="flex gap-2.5 mt-1">
            <div className="font-semibold">Genres:</div>
            <div className="flex-1 font-light">Blues, Soul, R&B</div>
          </div>
          <div className="flex gap-2.5 mt-1">
            <div className="font-semibold">Featured Artists:</div>
            <div className="flex-1">Tycho, Washed Out, Nujabes</div>
          </div>
        </div>
        <div className="flex gap-5 items-center px-6 py-2.5 mt-3.5 font-semibold max-md:flex-wrap max-md:px-5">
          <div className="justify-center self-stretch px-2.5 py-1 my-auto whitespace-nowrap">
            1
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7a811fd9572ceb98e606479439ab2e20b47a0aebedc0030d5546fef3a116620?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7a811fd9572ceb98e606479439ab2e20b47a0aebedc0030d5546fef3a116620?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7a811fd9572ceb98e606479439ab2e20b47a0aebedc0030d5546fef3a116620?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7a811fd9572ceb98e606479439ab2e20b47a0aebedc0030d5546fef3a116620?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7a811fd9572ceb98e606479439ab2e20b47a0aebedc0030d5546fef3a116620?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7a811fd9572ceb98e606479439ab2e20b47a0aebedc0030d5546fef3a116620?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7a811fd9572ceb98e606479439ab2e20b47a0aebedc0030d5546fef3a116620?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7a811fd9572ceb98e606479439ab2e20b47a0aebedc0030d5546fef3a116620?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch w-8 aspect-square"
          />
          <div className="flex-1 self-stretch my-auto">Echoes in the Fog</div>
          <div className="self-stretch my-auto font-medium text-right">
            04:35
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca53ccf675be6c84a171faabd344661d90fc3f177dd20c60fe833f40b9b85b87?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fc107e4041e7d229901f768af5d02e1360ce22075152f4431ecaee27ff93c2d?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
        <div className="flex gap-5 items-center px-6 py-2.5 mt-3.5 bg-black bg-opacity-40 max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/edb8fa23d89f649b8e0e7662971bbea1fd1c6c589b51b3e6f83136046eea0814?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a874d86725855bb0a5fc80fdfa1b8ec121fa1e176b1d90aba3dbc1fe531e9740?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a874d86725855bb0a5fc80fdfa1b8ec121fa1e176b1d90aba3dbc1fe531e9740?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a874d86725855bb0a5fc80fdfa1b8ec121fa1e176b1d90aba3dbc1fe531e9740?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a874d86725855bb0a5fc80fdfa1b8ec121fa1e176b1d90aba3dbc1fe531e9740?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a874d86725855bb0a5fc80fdfa1b8ec121fa1e176b1d90aba3dbc1fe531e9740?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a874d86725855bb0a5fc80fdfa1b8ec121fa1e176b1d90aba3dbc1fe531e9740?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a874d86725855bb0a5fc80fdfa1b8ec121fa1e176b1d90aba3dbc1fe531e9740?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a874d86725855bb0a5fc80fdfa1b8ec121fa1e176b1d90aba3dbc1fe531e9740?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch w-8 aspect-square"
          />
          <div className="flex-1 self-stretch my-auto font-semibold">
            Whispers of the Grays
          </div>
          <div className="self-stretch my-auto font-medium text-right">
            05:12
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f091de9f06dead8974b81c0bd57fa60faf8d14964afff42b4fda7fb9f626762?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d8101cefeb08c38cedec550afa07b25e131d8436c89933e631c70b2e408d80a?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
        <div className="flex gap-5 items-center px-6 py-2.5 mt-3 font-semibold max-md:flex-wrap max-md:px-5">
          <div className="justify-center self-stretch py-1 my-auto whitespace-nowrap">
            3
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afd7dc2185b55ae43680660fe77ba88af3478427b83d86bf19cf2135536c6bb4?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd7dc2185b55ae43680660fe77ba88af3478427b83d86bf19cf2135536c6bb4?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd7dc2185b55ae43680660fe77ba88af3478427b83d86bf19cf2135536c6bb4?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd7dc2185b55ae43680660fe77ba88af3478427b83d86bf19cf2135536c6bb4?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd7dc2185b55ae43680660fe77ba88af3478427b83d86bf19cf2135536c6bb4?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd7dc2185b55ae43680660fe77ba88af3478427b83d86bf19cf2135536c6bb4?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd7dc2185b55ae43680660fe77ba88af3478427b83d86bf19cf2135536c6bb4?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afd7dc2185b55ae43680660fe77ba88af3478427b83d86bf19cf2135536c6bb4?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch w-8 aspect-square"
          />
          <div className="flex-1 self-stretch my-auto">Dusk's Embrace</div>
          <div className="self-stretch my-auto font-medium text-right">
            06:04
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/96db13dff26c5b4c3d0dc3bdc798ff97c2e5613fe6f78d6e0ad5607545420a3b?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/acff7432192be16d63ad7201de3276c45cf8c0029f180003a0f982179dd487b6?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
        <div className="flex gap-5 items-center px-6 py-2.5 mt-3.5 font-semibold max-md:flex-wrap max-md:px-5">
          <div className="justify-center self-stretch px-2 py-1 my-auto whitespace-nowrap">
            4
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83abb7ebecd4fb898245322d403e07dcff74ce5ab234500cc80514267be5dc51?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83abb7ebecd4fb898245322d403e07dcff74ce5ab234500cc80514267be5dc51?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83abb7ebecd4fb898245322d403e07dcff74ce5ab234500cc80514267be5dc51?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83abb7ebecd4fb898245322d403e07dcff74ce5ab234500cc80514267be5dc51?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83abb7ebecd4fb898245322d403e07dcff74ce5ab234500cc80514267be5dc51?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83abb7ebecd4fb898245322d403e07dcff74ce5ab234500cc80514267be5dc51?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83abb7ebecd4fb898245322d403e07dcff74ce5ab234500cc80514267be5dc51?apiKey=fdc3c41cbf0743359cb4456bd858c80a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83abb7ebecd4fb898245322d403e07dcff74ce5ab234500cc80514267be5dc51?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch w-8 aspect-square"
          />
          <div className="flex-1 self-stretch my-auto">Shadows in the Mist</div>
          <div className="self-stretch my-auto font-medium text-right">
            04:47
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4214705261bb70b8370b38c59c50ec37f39a061afe8436d53391a2c6562cbf8a?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aa615938e57dc369b697f248e88b3799043443f58cf7b7795396194f6acd863?apiKey=fdc3c41cbf0743359cb4456bd858c80a&"
            className="shrink-0 self-stretch my-auto w-6 aspect-square"
          />
        </div>
      </div>
    </>
  );
};

Music.propTypes = {};

export default Music;
