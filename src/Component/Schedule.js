// Schedule.js

import React, { useState } from 'react';
import styles from './Schedule.module.css'; // Import CSS module

function Schedule() {
    const [address, setAddress] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [problems, setProblems] = useState([]);
    const [preferredTime, setPreferredTime] = useState('');
    const [manualDate, setManualDate] = useState('');
    const [manualTime, setManualTime] = useState('');
    const [message, setMessage] = useState('');

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleServiceTypeChange = (e) => {
        const selectedServiceType = e.target.value;
        setServiceType(selectedServiceType);

        switch (selectedServiceType) {
            case 'Electrical & Electronics Maintenance':
                setProblems([
                    '-Switchbox Installation (Any type)',
                    '-Switchboard Repairing',
                    '-Switch & Socket Repairing',
                    '-Fan (Ceiling/Standing/Wall) Installation, Repairing',
                    '-Lights Installation wall, ceiling, (Any type)',
                    '-MCB Installation, Meter Installation, Circuit Repairing',
                    '-Power House Maintenance & Servicing',
                    '-Wiring (Internal/Outer), Casing (Shot Repair & New Installing)',
                    '-Drill Holes',
                    '-Electronics Appliances Repairing & Installation (Iron, Heater, Geyser, Fancy Lights, Lamps, Door Bell, Water Pump, Projector, RO, Chimney, Air Cooler, Air Conditioning, or any other related work)'
                ]);
                break;
            case 'Plumbing Maintenance':
                setProblems([
                    '-Leakage Repairing',
                    '-Washbasin Installation & Repairing',
                    '-Waste Pipe Installation',
                    '-Bathroom Accessories Installation/Repairing',
                    '-Bath Fitting Installation',
                    '-Water Pipe Blockage Repairing',
                    '-Drainage Pipe Installation/Repairing',
                    '-Commode Installation/Part Changing',
                    '-Tap Installation & Repair (Any type)',
                    '-Toilet Seat Accessories Replacement (Any type)',
                    '-Water Tank Installation/Leakage Repair',
                    '-Water Motor Servicing/Installation/Changing',
                    '-Any kind of Product Installation or servicing or maintenance'
                ]);
                break;
            case 'Computer System Maintenance (Hardware & Software)':
                setProblems([
                    '-Basic maintenance tasks such as cutting the grass, emptying bins, managing weed control, and raking leaves.',
                    '-Planting and nurturing new trees, flowers, and various plants.',
                    '-Utilizing hand tools and basic light machinery such as plant vehicles and small diggers.',
                    '-Servicing all garden equipment and machinery to ensure proper functioning.',
                    '-Maintaining cleanliness by clearing rubbish and litter from the garden and grounds.',
                    '-Providing guidance to management regarding garden-related matters.',
                    '-Advising management on the costs of plants and garden necessities through detailed written quotations and reports.',
                    '-Ensuring a safe environment for staff and clients by adhering to safety and health regulations.',
                    '-Overseeing and/or assisting with snow removal efforts if required.',
                    '-Performing tasks such as irrigating, mowing, raking, and trimming lawns and/or sporting fields.'
                ]);
                break;
            case 'Carpenter Services':
                setProblems([
                    '- Virus and spyware removal, and malicious software prevention',
                    '- Hardware installations and upgrades, including memory, hard drives, SSDs, video cards, disc drives, etc.',
                    '- Installation, configuration, and networking of computer peripherals, including printers',
                    '- Design and configuration of networks',
                    '- Installation and upgrades of software, such as operating systems and database applications',
                    '- Troubleshooting and repairing of internet access connection issues',
                    '- Installation, configuration, and troubleshooting of routers and firewalls',
                    '- Configuration and support for email and messaging systems',
                    '- Implementation of data backup and recovery solutions',
                    '- Password recovery services'
                ]);
                break;
            case 'Cleaning Solutions':
                setProblems([
                    '-Locating and removing viruses and other malicious software from the system',
                    '-Tuning up a personal computer, helping it to start and function much faster',
                    '-Configuring and repairing email access clients, such as Outlook, and their associated data files',
                    '-Configuring external devices, such as printers, scanners, and external storage drives',
                    '-Performing standard routine maintenance such as examining system logs for issues',
                    '-Assisting in data back-up processes and migrating data between multiple computers in a network',
                    '-Checking network connections for possible vulnerabilities',
                    '-Resolving various software and hardware conflicts',
                    '-Assisting in the installation and upgrading of various software packages',
                    '-Repairing errors that cause a computer to lock or freeze up',
                    '-Setting up secure wireless networks once the proper equipment connections are in place'
                ]);
                break;
            default:
                setProblems([]);
                break;
        }
    };

    const handleProblemChange = (e) => {
        const selectedProblems = Array.from(e.target.selectedOptions, option => option.value);
        setProblems(selectedProblems);
    };

    const handlePreferredTimeChange = (e) => {
        setPreferredTime(e.target.value);
    };

    const handleManualDateChange = (e) => {
        setManualDate(e.target.value);
    };

    const handleManualTimeChange = (e) => {
        setManualTime(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = () => {
        // Handle submission logic here (e.g., sending form data to server)
    };

    return (
        <div className={styles.scheduleContainer}>
            <h2>Raise Your Maintenance Query Ticket</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="address">Enter Address</label>
                <textarea id="address" value={address} onChange={handleAddressChange} required />
                <label htmlFor="serviceType">Service Type</label>
                <select id="serviceType" value={serviceType} onChange={handleServiceTypeChange} required>
                    <option value="">Select...</option>
                    <option value="Electrical & Electronics Maintenance">Electrical & Electronics Maintenance</option>
                    <option value="Plumbing Maintenance">Plumbing Maintenance</option>
                    <option value="Computer System Maintenance (Hardware & Software)">Computer System Maintenance (Hardware & Software)</option>
                    <option value="Carpenter Services">Carpenter Services</option>
                    <option value="Cleaning Solutions">Cleaning Solutions</option>
                </select>
                <label htmlFor="problem">Problem</label>
                <select id="problem" multiple value={problems} onChange={handleProblemChange} required>
                    {problems.map((problem, index) => (
                        <option key={index} value={problem}>{problem}</option>
                    ))}
                </select>
                <label htmlFor="preferredTime">Preferred Time Slot</label>
                <table id="preferredTime">
                    <tbody>
                        <tr>
                            <td>Today</td>
                            <td>Tomorrow</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="timeSlot" value="Anytime" /> Anytime</td>
                            <td><input type="radio" name="timeSlot" value="Anytime" /> Anytime</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="timeSlot" value="Now" /> Now</td>
                            <td><input type="radio" name="timeSlot" value="Now" />10:00am to 12:00pm</td>
                           
                        </tr>
                        <tr>
                        <td><input type="radio" name="timeSlot" value="Within 2 to 3 hours" /> Within 2 to 3 hours </td>
                        <td><input type="radio" name="timeSlot" value="12:00pm to 03:00pm" /> 12:00pm to 03:00pm</td>
                        </tr>
                        <tr>
                            <td><input type="radio" name="timeSlot" value="Within 3 to 6 hours" /> Within 3 to 6 hours </td>
                            <td><input type="radio" name="timeSlot" value="03:00pm to 06:00pm" /> 03:00pm to 06:00pm</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.manualDateTime}>
                    <label htmlFor="manualDate">Enter Manually</label>
                    <input type="date" id="manualDate" value={manualDate} onChange={handleManualDateChange} />
                    <input type="time" id="manualTime" value={manualTime} onChange={handleManualTimeChange} />
                </div>
                <label htmlFor="message">Any Message (Up to 100 words)</label>
                <textarea id="message" value={message} onChange={handleMessageChange} maxLength={100} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Schedule;
