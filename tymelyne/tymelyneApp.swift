//
//  tymelyneApp.swift
//  tymelyne
//
//  Created by Tiffany Messer on 2/9/26.
//

import SwiftUI
import CoreData

@main
struct tymelyneApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
