function App() {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas w-[400px] h-[400px]">
          <iframe
            className="gmap_iframe"
            width="100%"
            scrolling="no"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
