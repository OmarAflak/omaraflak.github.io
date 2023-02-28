resize_canvas(1000, 1000)

const GAP = 50
const G = 1
const TIME = 60
const DELTA_TIME = 0.1

const compute_velocity = (start, end, target_time) => {
    const time = TIME - target_time
    const v0x = (end.x - start.x) / time
    const v0y = (end.y - start.y - 0.5 * G * time * time) / time
    return create_point(v0x, v0y)
}

const update_particle = (particle, time) => {
    if (particle.position.y > HEIGHT - 10) {
        return;
    }
    particle.position.x = particle.velocity.x * time + particle.start.x
    particle.position.y = 0.5 * G * time * time + particle.velocity.y * time + particle.start.y
}

const create_particle = (start, end, time) => {
    const s = copy_point(start)
    const e = copy_point(end)
    return {
        'start': s,
        'position': copy_point(start),
        'velocity': compute_velocity(s, e, time),
        'time': time
    }
}

const draw_particle = (particle, color) => {
    draw_rectangle(particle.position.x, particle.position.y, 3, 3, color)
}

const update_and_draw_particles = (particles, time) => {
    for (let i=0; i<particles.length; i++) {
        const t = particles[i].time
        if (time <= t) {
            continue;
        }
        update_particle(particles[i], time - t)
        draw_particle(particles[i], color)
    }
}

let target_points = SMILEY
let color = "yellow"

const query = window.location.search
const params = new URLSearchParams(query)
const svg = params.get('svg')
if (svg == 'google') {
    target_points = GOOGLE
} else if (svg == 'thanks') {
    target_points = THANKS
} else if (svg == 'paloma') {
    target_points = HEART
    color = "pink"
}

if (params.get('shuffle')) {
    target_points.sort(() => (Math.random() > 0.5) ? 1 : -1)
}

const half = Math.floor(target_points.length / 2)
const bottom_left = create_point(GAP + 400, HEIGHT - GAP)
const bottom_right = create_point(WIDTH - GAP - 400, HEIGHT - GAP)
const particles1 = target_points.filter((p, i) => i < half).map((p, i) => create_particle(bottom_left, p, i * DELTA_TIME))
const particles2 = target_points.filter((p, i) => i >= half).map((p, i) => create_particle(bottom_right, p, i * DELTA_TIME))

let t = 0

const update = () => {
    clear_canvas()
    update_and_draw_particles(particles1, t)
    update_and_draw_particles(particles2, t)
    t += 0.3
    requestAnimationFrame(update)
}

update()