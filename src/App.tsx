// import { Button, Note, PageHeader } from '@dist/cjs';
// import { Button, Note, PageHeader } from '@dist/esm';
import { Button, Note, PageHeader } from '@package';
import { FunctionComponent } from 'react';

const App: FunctionComponent = () => (
  <main className="container">
    <div className="w-[992px] mx-auto">
      {/* Begin:PageHeader */}
      <div className="my-8">
        <PageHeader title="Lorem ipsum dolor sit amet" />
      </div>
      {/* End:PageHeader */}
      {/* Begin:Note */}
      <div className="my-8">
        <div className="space-y-4">
          <Note>
            <h2 className="text-lg font-medium mb-2">Default</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor sed. Odio ut sem nulla pharetra. Nunc congue nisi vitae suscipit tellus mauris. Aliquet lectus proin nibh nisl condimentum id venenatis. Nisl vel pretium lectus quam. Eu augue ut lectus arcu bibendum. Ullamcorper a lacus vestibulum sed arcu non odio. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Facilisis magna etiam tempor orci eu. In est ante in nibh. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Ut tristique et egestas quis ipsum. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magnis dis parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus. Morbi quis commodo odio aenean sed adipiscing diam. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.</p>
          </Note>
          <Note variant="info">
            <h2 className="text-lg font-medium mb-2">Info</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor sed. Odio ut sem nulla pharetra. Nunc congue nisi vitae suscipit tellus mauris. Aliquet lectus proin nibh nisl condimentum id venenatis. Nisl vel pretium lectus quam. Eu augue ut lectus arcu bibendum. Ullamcorper a lacus vestibulum sed arcu non odio. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Facilisis magna etiam tempor orci eu. In est ante in nibh. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Ut tristique et egestas quis ipsum. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magnis dis parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus. Morbi quis commodo odio aenean sed adipiscing diam. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.</p>
          </Note>
          <Note variant="success">
            <h2 className="text-lg font-medium mb-2">Success</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor sed. Odio ut sem nulla pharetra. Nunc congue nisi vitae suscipit tellus mauris. Aliquet lectus proin nibh nisl condimentum id venenatis. Nisl vel pretium lectus quam. Eu augue ut lectus arcu bibendum. Ullamcorper a lacus vestibulum sed arcu non odio. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Facilisis magna etiam tempor orci eu. In est ante in nibh. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Ut tristique et egestas quis ipsum. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magnis dis parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus. Morbi quis commodo odio aenean sed adipiscing diam. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.</p>
          </Note>
          <Note variant="warning">
            <h2 className="text-lg font-medium mb-2">Warning</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor sed. Odio ut sem nulla pharetra. Nunc congue nisi vitae suscipit tellus mauris. Aliquet lectus proin nibh nisl condimentum id venenatis. Nisl vel pretium lectus quam. Eu augue ut lectus arcu bibendum. Ullamcorper a lacus vestibulum sed arcu non odio. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Facilisis magna etiam tempor orci eu. In est ante in nibh. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Ut tristique et egestas quis ipsum. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magnis dis parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus. Morbi quis commodo odio aenean sed adipiscing diam. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.</p>
          </Note>
          <Note variant="error">
            <h2 className="text-lg font-medium mb-2">Error</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor sed. Odio ut sem nulla pharetra. Nunc congue nisi vitae suscipit tellus mauris. Aliquet lectus proin nibh nisl condimentum id venenatis. Nisl vel pretium lectus quam. Eu augue ut lectus arcu bibendum. Ullamcorper a lacus vestibulum sed arcu non odio. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Facilisis magna etiam tempor orci eu. In est ante in nibh. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Ut tristique et egestas quis ipsum. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Magnis dis parturient montes nascetur ridiculus mus. Habitant morbi tristique senectus et netus. Morbi quis commodo odio aenean sed adipiscing diam. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.</p>
          </Note>
        </div>
      </div>
      {/* End:Note */}
      {/* Begin:Button */}
      <div className="my-8">
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Button text="Default" />
          </div>
          <div className="flex space-x-2">
            <Button text="Solid | Primary" type="solid" variant="primary" />
            <Button text="Solid | Secondary" type="solid" variant="secondary" />
            <Button text="Solid | Error" type="solid" variant="error" />
          </div>
          <div className="flex space-x-2">
            <Button text="Outline | Primary" type="outline" variant="primary" />
            <Button text="Outline | Secondary" type="outline" variant="secondary" />
            <Button text="Outline | Error" type="outline" variant="error" />
          </div>
        </div>
      </div>
      {/* End:Button */}
    </div>
  </main>
);

export default App;
