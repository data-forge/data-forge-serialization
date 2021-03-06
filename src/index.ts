
/**
 * Records column types in a serialized dataframe.
 * This is mainly used to reinstantiate dates that have been passed
 * across the wire, because these are the only values that aren't already
 * preserved by the JSON data format. 
 */
export interface IColumnTypes {
    [index: string]: string;
}

/**
 * The serialized index for a dataframe.
 */
export interface ISerializedIndex {
    /**
     * The data type of the index.
     */
    type: string;

    /**
     * Values in the index.
     */
    values: any[];
}

/**
 * The serialized form of a DataFrame. 
 * This is an ordinary JavaScript data structure that can be used to transfer a dataframe across the wire and
 * reinstantiate it on the otherside (this is necessary to maintain a stable column ordering and to allow date values to be reinstantiated).
 */
export interface ISerializedDataFrame {
    /**
     * The order of columns in the dataframe.
     */
    columnOrder: string[];

    /**
     * Records the columns and their types.
     */
    columns: IColumnTypes;

    /**
     * The serialized index for the dataframe.
     */
    index: ISerializedIndex;

    /**
     * Rows/values contained in the dataframe..
     */
    values: any[];
}
