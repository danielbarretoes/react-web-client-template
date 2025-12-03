import { useState, type ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

export interface BaseTableColumn<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T, isSelected: boolean) => ReactNode;
  className?: string;
}

export interface BaseTableProps<T> {
  data: T[];
  columns: BaseTableColumn<T>[];
  getRowId: (item: T) => string;
  defaultSelectedId?: string | null;
  onRowClick?: (item: T, id: string) => void;
  className?: string;
}

function BaseTable<T = Record<string, unknown>>({
  data,
  columns,
  getRowId,
  defaultSelectedId = null,
  onRowClick,
  className,
}: BaseTableProps<T>) {
  const [selectedRowId, setSelectedRowId] = useState<string | null>(
    defaultSelectedId
  );

  const handleRowClick = (item: T, id: string) => {
    setSelectedRowId(id);
    onRowClick?.(item, id);
  };

  return (
    <div
      className={cn(
        "w-full h-full flex flex-col overflow-hidden rounded-3xl bg-transparent",
        className
      )}
    >
      <div className="flex-1 min-h-0 overflow-x-auto overflow-y-auto pr-2 custom-scrollbar">
        <Table className="border-0" style={{ minWidth: "max-content" }}>
          <TableHeader
            className={cn("border-0 [&_tr]:border-0! sticky top-0 z-10")}
          >
            <TableRow className="hover:bg-transparent! border-0">
              {columns.map((column) => (
                <TableHead
                  key={String(column.key)}
                  className={cn(
                    "h-9 px-4 text-left font-medium text-[11px] uppercase tracking-wider border-0",
                    "text-muted-foreground",
                    column.className
                  )}
                >
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="border-0 [&_tr]:border-0! [&_tr]:mb-2">
            {data.map((item) => {
              const id = getRowId(item);
              const isSelected = selectedRowId === id;

              return (
                <TableRow
                  key={id}
                  onClick={() => handleRowClick(item, id)}
                  className={cn(
                    "cursor-pointer transition-colors border-0 rounded-3xl overflow-hidden mb-2 border-b-0!",
                    isSelected
                      ? "text-primary-foreground! hover:bg-primary! bg-primary!"
                      : "bg-transparent! hover:bg-muted! border-transparent!"
                  )}
                >
                  {columns.map((column, colIndex) => {
                    const value = column.render
                      ? column.render(item, isSelected)
                      : ((item as Record<string, unknown>)[
                          String(column.key)
                        ] as ReactNode);
                    const isFirst = colIndex === 0;
                    const isLast = colIndex === columns.length - 1;

                    return (
                      <TableCell
                        key={String(column.key)}
                        className={cn(
                          "p-0 border-0 rounded-3xl",
                          column.className
                        )}
                        style={{
                          borderRadius: isFirst
                            ? "24px 0 0 24px"
                            : isLast
                            ? "0 24px 24px 0"
                            : "0",
                        }}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div
        className={cn(
          "px-4 py-2 border-t border-border shrink-0",
          "text-muted-foreground"
        )}
      >
        <p className="text-sm font-medium">
          {data.length} {data.length === 1 ? "item" : "items"}
        </p>
      </div>
    </div>
  );
}

export default BaseTable;
