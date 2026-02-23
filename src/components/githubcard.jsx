import { useState, useEffect } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import { useTheme } from '../context/ThemeContext';
import './GitHubCard.css';

const GITHUB_USERNAME = 'Manasvi05Dadhich';

const fetchGitHubData = async (year) => {
    try {
        const res = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${year}`
        );
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        return data.contributions || [];
    } catch {
        return [];
    }
};

const GitHubCard = () => {
    const { theme } = useTheme();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchGitHubData(2026).then((contributions) => {
            if (contributions.length > 0) {
                setData(contributions);
            } else {
                // Fallback: empty calendar from Jan 1 2026 to today
                const start = new Date('2026-01-01');
                const end = new Date();
                const fallback = [];
                for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
                    fallback.push({
                        date: d.toISOString().split('T')[0],
                        count: 0,
                        level: 0,
                    });
                }
                setData(fallback);
            }
            setLoading(false);
        });
    }, []);

    const calendarTheme = {
        dark: ['#3a3838ff', '#4d2600', '#804000', '#b35900', '#e66700'],
        light: ['#d9d9d9', '#ad95e1ff', '#927dd8ff', '#8b5cf6', '#7c3aed'],
    };

    return (
        <section id="github" className="github section">
            <div className="container">
                <h2 className="section-title">GitHub Activity</h2>
                <div className="github__calendar">
                    {loading ? (
                        <p className="github__loading">Loading contributions...</p>
                    ) : (
                        <ActivityCalendar
                            data={data}
                            blockMargin={6}
                            blockRadius={2}
                            blockSize={12}
                            fontSize={14}
                            colorScheme={theme}
                            maxLevel={4}
                            showWeekdayLabels
                            theme={calendarTheme}
                            labels={{
                                totalCount: '{{count}} contributions in 2026',
                            }}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default GitHubCard;