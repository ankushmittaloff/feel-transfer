import { useEffect, useRef } from "react";
import { Viewer } from "@photo-sphere-viewer/core";
import "@photo-sphere-viewer/core/index.css";

interface PanoramaViewerProps {
  imageUrl: string;
}

const PanoramaViewer = ({ imageUrl }: PanoramaViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<Viewer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    viewerRef.current = new Viewer({
      container: containerRef.current,
      panorama: imageUrl,
      defaultZoomLvl: 50,
      navbar: false,
      touchmoveTwoFingers: false,
      mousewheelCtrlKey: false,
      moveSpeed: 1.5,
    });

    return () => {
      viewerRef.current?.destroy();
      viewerRef.current = null;
    };
  }, [imageUrl]);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default PanoramaViewer;
