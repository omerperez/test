import { LAYOUT_HEADER_SIZE, LAYOUT_PADDING_SIZE } from "@/constants";
import { useMemo } from "react";
import {
  GridOnItemsRenderedProps,
  ListOnItemsRenderedProps,
} from "react-window";
import { useWindowSize } from "./useWindowSize";

interface VirtualGridResults {
  gridColumnCount: number;
  virtualGridWidth: number;
  virtualGridHeight: number;
  transformGridItemsRenderedPropsToList: (
    transformGridItemsRenderedPropsToList: GridOnItemsRenderedProps,
    total: number,
  ) => ListOnItemsRenderedProps;
}

export const useVirtualGrid = (): VirtualGridResults => {
  const { height, width } = useWindowSize();

  const virtualGridWidth = width - LAYOUT_PADDING_SIZE;
  const gridColumnCount = useMemo(() => {
    if (virtualGridWidth < 641) return 1;
    if (virtualGridWidth < 1000) return 2;
    return 3;
  }, [virtualGridWidth]);

  const transformGridIndex = (index: number) => index * gridColumnCount;

  const transformGridItemsRenderedPropsToList = (
    {
      visibleRowStartIndex,
      visibleRowStopIndex,
      overscanRowStopIndex,
      overscanRowStartIndex,
    }: GridOnItemsRenderedProps,
    total: number,
  ) => ({
    overscanStartIndex: transformGridIndex(overscanRowStartIndex),
    overscanStopIndex: Math.min(
      transformGridIndex(overscanRowStopIndex),
      total,
    ),
    visibleStartIndex: transformGridIndex(visibleRowStartIndex),
    visibleStopIndex: Math.min(transformGridIndex(visibleRowStopIndex), total),
  });

  return {
    virtualGridWidth,
    gridColumnCount,
    virtualGridHeight: height - LAYOUT_HEADER_SIZE,
    transformGridItemsRenderedPropsToList,
  };
};
