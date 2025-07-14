import React, { useState } from 'react';
import { SeatLegend } from './seatLegent';

const SeatMap = ({ seats, onBook }) => {
    const [selectedSeat, setSelectedSeat] = useState(null);

    const groupedByRow = seats.reduce((acc, seat) => {
        const row = seat.RowNo;
        if (!acc[row]) acc[row] = [];
        acc[row].push(seat);
        return acc;
    }, {});

    const handleSelect = (seat) => {
        if (seat.SeatStatus === 'Open') {
            setSelectedSeat(seat.Code === selectedSeat ? null : seat.Code);
        }
    };

    const renderSeat = (seat) => {
        const isSelected = selectedSeat === seat.Code;
        const isOccupied = seat.SeatStatus !== 'Open';

        const baseStyle = `w-10 h-10 rounded-md flex items-center justify-center font-semibold text-xs transition cursor-pointer border`;
        const statusStyle = isOccupied
            ? 'bg-gray-300 text-white cursor-not-allowed border-gray-400'
            : isSelected
                ? 'bg-blue-500 text-white border-blue-700'
                : 'bg-green-500 text-white hover:bg-green-600 border-green-700';

        const price = Number(seat?.PricingInfo?.TotalGrossPrice || 0).toFixed(2);

        return (
            <div
                key={seat.Code}
                className={`${baseStyle} ${statusStyle}`}
                title={`Seat: ${seat.Code}\nType: ${seat.SeatType}\nPrice: $${price}`}
                onClick={() => handleSelect(seat)}
            >
                {seat.SeatNo || '-'}
            </div>
        );
    };

    const selectedSeatData = seats.find(seat => seat.Code === selectedSeat);

    return (
        <div className="bg-white rounded shadow-md p-4 max-w-2xl mx-auto">
            <h2 className="text-lg font-bold mb-2">Select Your Seat</h2>

            <SeatLegend />

            <div className="space-y-3 mt-4">
                {Object.entries(groupedByRow).sort((a, b) => a[0] - b[0]).map(([rowNo, rowSeats]) => (
                    <div key={rowNo} className="flex items-center gap-3">
                        <span className="w-6 text-right">{rowNo}</span>

                        {/* Left side (A-C) */}
                        <div className="grid grid-cols-3 gap-2">
                            {rowSeats
                                .sort((a, b) => a.SeatNo.localeCompare(b.SeatNo))
                                .slice(0, 3)
                                .map(renderSeat)}
                        </div>

                        <div className="w-6" /> {/* aisle gap */}

                        {/* Right side (D-F) */}
                        <div className="grid grid-cols-3 gap-2">
                            {rowSeats
                                .sort((a, b) => a.SeatNo.localeCompare(b.SeatNo))
                                .slice(3, 6)
                                .map(renderSeat)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Selected seat info */}
            {selectedSeatData && (
                <div className="mt-4 p-3 bg-blue-100 rounded text-sm">
                    <strong>Selected Seat:</strong> {selectedSeatData.Code} | Type: {selectedSeatData.SeatType} | Price: ${Number(selectedSeatData.PricingInfo?.TotalGrossPrice || 0).toFixed(2)}
                </div>
            )}

            {/* Optional booking button */}
            {selectedSeatData && onBook && (
                <button
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                    onClick={() => onBook(selectedSeatData)}
                >
                    Book Seat
                </button>
            )}
        </div>
    );
};

export default SeatMap;
